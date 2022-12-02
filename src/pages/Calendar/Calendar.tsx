import React, { useState } from "react";
import Header from "../../components/Header/";
import { Container, Line, LineHorizontal } from "./styled";
import Main from "./Main";
import Footer from "./Footer";
import { useSelector } from "react-redux";

export const Calendar = () => {
  const [currentGap, setCurrentGap] = useState(1)
  const gaps = useSelector((store: any) => store.calendar.gapsInHistory)

  const onSelectGap = (gap: number) => {
    if (gap === 0) {
      return
    } else if (gap > 6) {
      return
    }
    setCurrentGap(gap)
  }

  return (
    <Container>
      <Line />
      <LineHorizontal />
      <Header />
      <Main dates={gaps[currentGap].dates} currentGap={currentGap} setCurrentGap={onSelectGap} />
      <Footer events={gaps[currentGap].events}/>
    </Container>
  )
}