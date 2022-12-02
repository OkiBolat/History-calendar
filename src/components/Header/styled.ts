import styled from 'styled-components';
import { device } from '../../assets/styles';

export const Container = styled.div`
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: #42567A;
    border-left-width: 5px;
    border-left-style: solid;
    border-image: linear-gradient(183deg, rgba(56,119,238,1) 0%, rgba(239,93,168,1) 0%, rgba(56,119,238,1) 100%) 1;
    @media (${device.laptop}) {
      margin-top: 59px;
        padding-left: 10px;
        border: none;
        left: 20;
        top: 59px;
        ont-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        color: #42567A;
      }
    
`