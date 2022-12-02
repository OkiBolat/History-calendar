import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styled';
import DateBlock from '../../../components/DateBlock';
import { Navigation, Pagination } from 'swiper';
import Paging from '../../../components/Paging';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css"


interface IFooterProps {
  children?: React.ReactNode;
  events: Array<object>;
  total: number;
  currentGap: number;
  setCurrentGap: any;
}

const EventSwiper = ({ events, ...props }: any) => {
  return (<Swiper
  className='swiper'
    {...props}
  >
    {events.map((e: any, i: any) => {
      return (
        <SwiperSlide className='slide' key={i}>
          <DateBlock year={e.year} text={e.info} />
        </SwiperSlide>
      );
    })}
  </Swiper>)
}

const Footer: React.FC<IFooterProps> = ({ events, total, currentGap, setCurrentGap }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 7px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (matches ?
    <Container>
      <Paging count={total} currentGap={currentGap} setCurrentGap={setCurrentGap} />
      <EventSwiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        events={events} />
    </Container> :
    <Container>
      <EventSwiper
        style={{padding: "100px 0"}}
        pagination={true}
        slidesPerView={2}
        modules={[Pagination]}
        events={events} />
      <Paging count={total} currentGap={currentGap} setCurrentGap={setCurrentGap} />
    </Container>
  );
}

export default Footer;
