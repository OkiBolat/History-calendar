import React from 'react';
import {Container} from './styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header:React.FC<IHeaderProps> = (props) => {
  return (
    <>
  <Container>Исторические <br />даты</Container>
    </>
  );
}

export default Header;
