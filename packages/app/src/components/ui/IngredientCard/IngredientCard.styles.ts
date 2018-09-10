import styled, { css } from 'styled-components';

const BodyWrapper: any = styled.div`
  height: 53px;
  transition: .3s;

  ${(props: any) => props.isEdit && css`
    height: 78px;
  `};
`;

const CardWrapper: any = styled.div`
  opacity: 1;
  transition: .3s;

  ${(props: any) => props.isSubmitting && css`
    opacity: .5;
    pointer-events: none;
  `};
`;

export {
  BodyWrapper,
  CardWrapper,
};
