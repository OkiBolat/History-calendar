import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: -212px;
    left: 21px;
  // /* scroll-snap-type: mandatory;
  // scroll-snap-points-y: repeat(100vh);
  // scroll-snap-type: y mandatory; */
`;

export const Section = styled.div`
  border: 1px solid #00000038;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  width: 530px;
  border-radius: 50%;
  margin: 40px auto;
  scroll-snap-align: start;
`;
interface ItemProps {
  active: boolean;
  rotate: number;
}

export const Item = styled.div<ItemProps>`
cursor: pointer;
  position: absolute;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  p {
  transition: all 0.3s;
    border: 1px solid rgba(48, 62, 88, 0.5);
    min-width: 56px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    transform: scale(0.1);
    background: black;
  }
  p:hover {
    transform: scale(1);
    background: #f4f5f9;
  }
  ${props => css`
      transform: rotate(${Math.abs(props.rotate)}deg)
    `

  };
  p {
    ${(props) =>
    props.active &&
    css`
    transform: scale(1);
    background: #f4f5f9;

    `}
`