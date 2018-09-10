import { setFieldValueType, setFieldTouchedType } from '../../../types/Formik.types';

export interface InitialValues {
  name: string;
  categories: string;
  image?: string;
}

export interface RenderForm {
  setFieldValue: setFieldValueType;
  setFieldTouched: setFieldTouchedType;
  values: InitialValues;
  handleSubmit: (values: any) => void;
  isSubmitting: boolean;
  submitForm: () => void;
}
