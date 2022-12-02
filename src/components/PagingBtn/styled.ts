import styled, { css } from 'styled-components';
import { ReactComponent as SVG } from '../../assets/icons/paging.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid rgba(66, 86, 122, 0.5);
  cursor: pointer;
  opacity: 0.3;
  margin-right: 2px;
  &:hover:{
    opacity: 1;
    border-color: rgba(66, 86, 122, 0.5);
  }
`
interface IconInterface {
  forward: boolean;
}
export const Icon = styled(SVG)<IconInterface>`
  ${props => props.forward && css`
    transform: rotate(180deg)`}
`