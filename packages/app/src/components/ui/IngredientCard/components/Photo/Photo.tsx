import * as React from 'react';
import Dropzone from 'react-dropzone';

import { Icon } from 'antd';

import {
  DropzoneWrapper,
  IconWrapper,
  Image,
  ImageWrapper,
} from './Photo.styles';

interface PropTypes {
  image?: string;
  isEdit: boolean;
}

class Photo extends React.PureComponent<PropTypes> {
  static defaultProps = {
    image: '',
  };

  render () {
    return (
      <React.Fragment>
        {
          this.props.isEdit ? (
            <DropzoneWrapper>
              <Dropzone className="dropzone">
                <IconWrapper>
                  <Icon type="plus-circle-o" />
                </IconWrapper>
              </Dropzone>
            </DropzoneWrapper>
          ) : null
        }
        {
          this.props.image ? (
            <ImageWrapper isEdit={this.props.isEdit}>
              <Image src={this.props.image} alt={`${name}-img`} />
            </ImageWrapper>
          ) : null
        }
      </React.Fragment>
    );
  }
}

export default Photo;
