import * as React from 'react';
import Dropzone from 'react-dropzone';
import noPhoto from '../../../../../static/img/no-photo-available.png';

import { Icon } from 'antd';

import {
  DropzoneWrapper,
  IconWrapper,
  Image,
  ImageWrapper,
} from './Photo.styles';
import { setFieldValueType, setFieldTouchedType } from '../../../../../types/Formik.types';

interface PropTypes {
  image?: string;
  isEdit: boolean;
  onChange: setFieldValueType;
  onUpload: setFieldTouchedType;
}

interface FileReadTarget extends EventTarget {
  result: string;
}

class Photo extends React.PureComponent<PropTypes> {
  static defaultProps = {
    image: '',
  };

  onDropAccepted = (image: any) => {
    const file = image[0];
    const reader = new FileReader();

    reader.onload = (event: Event) => {
      const target = event.target as FileReadTarget;
      if (target && target.result) {
        this.props.onChange('image', target.result);
        this.props.onUpload('image', true);
      }
    };
    reader.readAsDataURL(file);
  }

  render () {
    return (
      <React.Fragment>
        {
          this.props.isEdit ? (
            <DropzoneWrapper>
              <Dropzone
                accept="image/jpeg, image/png"
                className="dropzone"
                onDropAccepted={this.onDropAccepted}
                multiple={false}
              >
                <IconWrapper>
                  <Icon type="plus-circle-o" />
                </IconWrapper>
              </Dropzone>
            </DropzoneWrapper>
          ) : null
        }
        <ImageWrapper isEdit={this.props.isEdit}>
          <Image src={this.props.image || noPhoto} alt={`${name}-img`} />
        </ImageWrapper>
      </React.Fragment>
    );
  }
}

export default Photo;
