/* ------------------- Action -----------------------*/
const changeCategory = (newCategory) => ({
  type: 'CHANGE_CATEGORY',
  newCategory,
});

const changeType = (newType) => ({
  type: 'CHANGE_TYPE',
  newType,
});

const changeToken = (newToken) => ({
  type: 'CHANGE_TOKEN',
  newToken,
});

/* ------------------- Reducer -----------------------*/
const typeReducer = (state = { type: null, token: null, category: null }, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        category: action.newCategory,
      };
    case 'CHANGE_TOKEN':
      return {
        ...state,
        token: action.newToken,
      };
    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.newType,
      };
      // other cases
    default:
      return state;
  }
};

export default typeReducer;
export { changeType, changeToken, changeCategory };

