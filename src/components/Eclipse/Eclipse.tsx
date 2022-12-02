import React from 'react';
import { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Item, Section } from './styled';
import "./styles.css";

interface IEclipseProps {
  currentGap: number;
  setCurrentGap: any
}
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Eclipse: React.FC<IEclipseProps> = ({ currentGap, setCurrentGap }) => {
  const [values, setValues] = useState({
    6: {
      position: 6,
      active: true,
      rot: -300
    },
    1: {
      position: 1,
      active: false,
      rot: 0
    },
    2: {
      position: 2,
      active: false,
      rot: -60
    },
    3: {
      position: 3,
      active: false,
      rot: -120
    },
    4: {
      position: 4,
      active: false,
      rot: -180
    },
    5: {
      position: 5,
      active: false,
      rot: -240
    }
  });

  const section1 = useRef(null);
  const item = useRef(null);
  const container = useRef(null);

  const rotateFunction = (val:any) => {
    setCurrentGap(val.position)
    gsap.to(section1.current, {
      rotation: val.rot,
      ease: "none",
      duration: 1,
      transformOrigin: "center center",
      motionPath: {}
    });

  };

  useEffect(() => {
    rotateFunction(values[currentGap]);
  }, [currentGap]);

  return (
    <>
      <Container ref={container}>
        <Section
          className="section"
          ref={section1}
        >
          {Object.values(values).map((k) => (
            <Item
              ref={item}
              rotate={k.rot}
              active={currentGap === k.position}
              onClick={() => rotateFunction(k)}
              className={`_${k.position} ${currentGap === k.position && "active"
                }`}
            >
              <p>
                <text>{k.position}</text>
              </p>
            </Item>
          ))}
        </Section>
      </Container>
    </>
  );
}

export default Eclipse;


