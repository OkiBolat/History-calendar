import React from 'react';
import PagingBtn from '../PagingBtn';
import { Container, Counter } from './styled';

interface IPagingProps {
  children?: React.ReactNode;
  count: number;
  currentGap: number;
  setCurrentGap: any;
}

const Paging: React.FC<IPagingProps> = ({count, currentGap, setCurrentGap}) => {
  return (
    <>
      <Container>
        <Counter>{`0${currentGap}`}/06</Counter>
        <PagingBtn currentGap={currentGap} onClick={() => setCurrentGap(currentGap-1)} forward={false} />
        <PagingBtn currentGap={currentGap} onClick={() => setCurrentGap(currentGap+1)} forward={true} />
      </Container>
    </>
  );
}

export default Paging;
