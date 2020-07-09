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

const changeAnswer = (newAnswer) => ({
  type: 'CHANGE_ANSWER',
  newAnswer,
});
const anserIdChoosen = (newAnswerId) => ({
  type: 'ANSWER_ID_CHOOSEN',
  newAnswerId,
});

/* ------------------- Reducer -----------------------*/
const typeReducer = (state = {
  type: null, token: null, category: null, answer: null, answerId: null,
}, action) => {
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
    case 'CHANGE_ANSWER':
      return {
        ...state,
        answer: action.newAnswer,
      };
    case 'ANSWER_ID_CHOOSEN':
      return {
        ...state,
        answerId: action.newAnswerId,
      };

      // other cases
    default:
      return state;
  }
};

export default typeReducer;
export {
  changeType, changeToken, changeCategory, changeAnswer, anserIdChoosen,
};
