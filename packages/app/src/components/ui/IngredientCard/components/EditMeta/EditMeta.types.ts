import { InitialValues } from '../../IngredientCard.types';

export interface RenderForm {
  setFieldValue: (arg1: string, arg2: string) => void;
  setFieldTouched: (arg1: string, arg2: boolean) => void;
  values: InitialValues;
  handleSubmit: (values: any) => void;
}
