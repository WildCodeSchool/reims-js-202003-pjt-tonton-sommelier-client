/* ------------------- Action -----------------------*/
const changeToken = (newToken) => ({
  type: 'CHANGE_TOKEN',
  newToken,
});

/* ------------------- Reducer -----------------------*/
const tokenReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case 'CHANGE_TOKEN':
      return {
        ...state,
        token: action.newToken,
      };
    // other cases
    default:
      return state;
  }
};

export default tokenReducer;
export { changeToken };