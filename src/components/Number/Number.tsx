import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";
import { Wrp } from './styled';

interface INumberProps {
  number: number;
}

const myObject = {
  totalValue: 0
};

const Number: React.FC<INumberProps> = props => {
  const [total, setTotal] = useState(props.number);
  useEffect(() => {
    TweenLite.to(myObject, 0.5, {
      totalValue: props.number,
      roundProps: "totalValue",
      onUpdate: () => {
        setTotal(myObject.totalValue);
      }
    });
  }, [props.number]);
  return (
    <Wrp>{total}</Wrp>
  );
};

export default Number;