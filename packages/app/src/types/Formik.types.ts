type setFieldTouchedType = (field: string, isTouched: boolean, shouldValidate?: boolean) => void;
type setFieldValueType = (field: string, value: any, shouldValidate?: boolean) => void;

export {
  setFieldTouchedType,
  setFieldValueType,
};
