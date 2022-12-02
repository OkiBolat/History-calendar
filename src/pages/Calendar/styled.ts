import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: #d0d5df;

  
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  #E5E5E5;
  max-width: 1400px;
  min-height: 1000px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 320px;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
  
`

export const Line = styled.div`
position: absolute;
min-height: 100%;
width: 2px;
background: #00000038;
left: 51.5%;
opacity: 0.5;
`
export const LineHorizontal = styled.div`
  position: absolute;
  min-width: 100%;
  height: 2px;
  background: #00000038;
  top: 39%;
opacity: 0.5;

`
