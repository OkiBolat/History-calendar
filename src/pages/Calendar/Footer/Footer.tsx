import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {} from './styled';

import 'swiper/css';
import 'swiper/css/effect-fade';
import DateBlock from '../../../components/DateBlock';

interface IFooterProps {
  children?: React.ReactNode;
  events: Array<object>;
}

const Footer:React.FC<IFooterProps> = ({events}) => {
  return (
    <>
  <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          pagination={true}
          className="mySwiper"
        >
          {events.map((e: any, i) => {
            return (
              <SwiperSlide key={i}>
                <DateBlock year={e.year} text={e.info} />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}

export default Footer;
