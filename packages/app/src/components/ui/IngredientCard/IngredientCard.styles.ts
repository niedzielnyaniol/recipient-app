import styled, { css } from 'styled-components';
import theme from '../../../theme';

const BodyWrapper: any = styled.div`
  height: 53px;
  transition: ${theme.animationDuration};

  ${(props: any) => props.isEdit && css`
    height: 78px;
  `};
`;

const CardWrapper: any = styled.div`
  opacity: 1;
  transition: ${theme.animationDuration};

  ${(props: any) => props.isSubmitting && css`
    opacity: .5;
    pointer-events: none;
  `};
`;

export {
  BodyWrapper,
  CardWrapper,
};
