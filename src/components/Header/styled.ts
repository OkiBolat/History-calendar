import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: #42567A;
    left: 0;
    padding-left: 80px;
    margin-top: 170px;
    margin-bottom: 80px;
    border-left-width: 5px;
    border-left-style: solid;
    border-image: linear-gradient(183deg, rgba(56,119,238,1) 0%, rgba(239,93,168,1) 0%, rgba(56,119,238,1) 100%) 1;
    text-align: start;
    @media (max-width: 768px) {
        border: none;
        left: 20;
        top: 59px;
      }
    
`