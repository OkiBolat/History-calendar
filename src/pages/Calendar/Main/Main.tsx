import React from 'react';
import Eclipse from '../../../components/Eclipse';
import Paging from '../../../components/Paging';
import { Container, MainHeader } from './styled';

interface IMainProps {
  children?: React.ReactNode;
  dates: Array<number>;
  currentGap: number;
  setCurrentGap: any;
}

const Main: React.FC<IMainProps> = ({ dates, currentGap, setCurrentGap}) => {

  return (
    <>
      <Container>
        <MainHeader>{dates[0]}  {dates[1]}</MainHeader>
        <Eclipse currentGap={currentGap} setCurrentGap={setCurrentGap} />
      </Container>
      <Paging count={6} currentGap={currentGap} setCurrentGap={setCurrentGap} />
    </>
  );
}

export default Main;
