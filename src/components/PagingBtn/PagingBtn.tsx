import React from 'react';
import {Container, Icon} from './styled';

interface IPagingBtnProps {
  forward: boolean;
  onClick: () => void;
  currentGap: number;
}

const PagingBtn:React.FC<IPagingBtnProps> = ({currentGap , forward, onClick}) => {
  return (
    <>
    <Container onClick={onClick}>
      <Icon forward={forward}/>
    </Container>
    </>
  );
}

export default PagingBtn;
