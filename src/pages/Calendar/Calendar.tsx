import { useState } from "react";
import Header from "../../components/Header/";
import Main from "./Main";
import Footer from "./Footer";
import { Container } from "./styled";
import { useSelector } from "react-redux";

const Calendar = () => {
  const [currentGap, setCurrentGap] = useState(1);
  const gaps = useSelector((store: any) => store.calendar.gapsInHistory);

  const totalCount = Object.keys(gaps).length,
    currentDates = gaps[currentGap].dates,
    currentEvents = gaps[currentGap].events;

  function onSelectGap(gap: number) {
    if (gap === 0) {
      return
    } else if (gap > totalCount) {
      return
    }
    setCurrentGap(gap)
  };

  return (
    <Container>
      <Header />
      <Main
        totalCount={totalCount}
        dates={currentDates}
        currentGap={currentGap}
        setCurrentGap={onSelectGap} />
      <Footer
        total={totalCount}
        currentGap={currentGap}
        setCurrentGap={onSelectGap}
        events={currentEvents} />
    </Container>
  )
};

export default Calendar;
