import styled, { css } from 'styled-components';

const BodyWrapper: any = styled.div`
  height: 53px;
  transition: .3s;

  ${(props: any) => props.isEdit && css`
    height: 78px;
  `};
`;

export { BodyWrapper };
