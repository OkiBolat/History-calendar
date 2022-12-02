import styled from 'styled-components';
import { device } from '../../../assets/styles';

export const Container = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
@media ${device.laptop} {

}
  `;

export const MainHeader = styled.div`
    position: absolute;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 200px;
    line-height: 160px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #5D5FEF;
  @media ${device.laptop} {
        top:0;
        height: auto;
        position: initial;
        font-weight: 700;
        font-size: 56px;
        line-height: 72px;
        color: #3877EE;
        margin-bottom: -72px;
        border-bottom: 1px solid;
  }
  `;

  export const LineVertical = styled.div`
  position: absolute;
  height: 100vw;
  width: 1px;
  left: 50%;
  background: #42567A;
@media ${device.laptop} {
  display:none;
}
`;

export const LineHorizontal = styled.div`
position: absolute;
height: 1px;
top: 50%;
width: 100vw;
background: #42567A;
  @media ${device.laptop} {
    display:none;
  }
`;
