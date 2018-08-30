import styled, { css } from 'styled-components';

const DropzoneWrapper = styled.div`
  position: relative;
  z-index: 1;

  .dropzone {
    width: 100%;
    height: 248px;
    border-width: 2px;
    border-color: rgb(102, 102, 102);
    border-style: dashed;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: cet;
  align-items: center;
  font-size: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 248px;
`;

const ImageWrapper: any = styled.div`
  opacity: 1;
  transition: .3s;

  ${(props: any) => props.isEdit && css`
    position: absolute;
    top: 0;
    opacity: 0.3;
  `};
`;

export {
  DropzoneWrapper,
  IconWrapper,
  Image,
  ImageWrapper,
};
