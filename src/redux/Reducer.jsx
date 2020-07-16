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

const NameSession = (newNameSession) => ({
  type: 'NAME_SESSION',
  newNameSession,
});

const counterScore = (newCounterScore) => ({
  type: 'COUNTER_SCORE',
  newCounterScore: newCounterScore + 11,
});
const wineTesting = (newWineTesting) => ({
  type: 'WINE_TESTING',
  newWineTesting: newWineTesting + 1,
});
const resetWineTesting = (newResetWineTesting) => ({
  type: 'RESET_WINE_TESTING',
  newResetWineTesting: newResetWineTesting - 3,
});

/* ------------------- Reducer -----------------------*/
const typeReducer = (state = {
  type: null, token: null, category: null, answer: null, answerId: null, NameSession: null, score: 0, wineTesting: 1,
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
    case 'NAME_SESSION':
      return {
        ...state,
        NameSession: action.newNameSession,
      };
    case 'COUNTER_SCORE':
      return {
        ...state,
        score: action.newCounterScore,
      };
    case 'WINE_TESTING':
      return {
        ...state,
        wineTesting: action.newWineTesting,
      };
    case 'RESET_WINE_TESTING':
      return {
        ...state,
        wineTesting: action.newResetWineTesting,
      };

      // other cases
    default:
      return state;
  }
};

export default typeReducer;
export {
  changeType, changeToken, changeCategory, changeAnswer,
  anserIdChoosen, NameSession, counterScore, wineTesting,
  resetWineTesting,
};
