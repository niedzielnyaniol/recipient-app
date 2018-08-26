import IAction from "../../types/IAction";

const initialState = {
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
}