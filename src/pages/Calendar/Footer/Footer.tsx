import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styled';
import "swiper/css";
import "swiper/css/navigation";
import DateBlock from '../../../components/DateBlock';
import { Navigation } from 'swiper';
import Paging from '../../../components/Paging';
import "./style.css"


interface IFooterProps {
  children?: React.ReactNode;
  events: Array<object>;
  total: number;
  currentGap: number;
  setCurrentGap: any;
}

const EventSwiper = ({ events }: any) => {
  return (<Swiper
    slidesPerView={3}
    navigation={true} modules={[Navigation]} className="mySwiper"
  >
    {events.map((e: any, i: any) => {
      return (
        <SwiperSlide style={{ height: "40px" }} key={i}>
          <DateBlock year={e.year} text={e.info} />
        </SwiperSlide>
      );
    })}
  </Swiper>)
}

const Footer: React.FC<IFooterProps> = ({ events, total, currentGap, setCurrentGap }) => {

  return (
    <Container>
      <Paging count={total} currentGap={currentGap} setCurrentGap={setCurrentGap} />
      <EventSwiper events={events} />
    </Container>
  );
}

export default Footer;
