import { PRESS_NUM, ENTER, OPERATION, CLEAR, SWAP } from './actions';

// inputState = append | replace | push
const initialState = {
  stack: [],
  inputState: 'replace',
};

const doOperation = (x, y, op) => {
  const a = x ? parseFloat(x) : 0;
  const b = y ? parseFloat(y) : 0;

  if (op === 'pow') {
    return b ** a;
  } else if (op === '+') {
    return b + a;
  } else if (op === '-') {
    return b - a;
  } else if (op === 'X') {
    return b * a;
  } else if (op === '/') {
    return b / a;
  }

  return 0;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: 'push',
      };
    case CLEAR:
      return initialState;
    case OPERATION:
      return {
        stack: [`${doOperation(state.stack[0], state.stack[1], action.op)}`, ...state.stack.slice(2)],
        inputState: 'push',
      };
    case ENTER:
      return {
        stack: [state.stack[0] || 0, ...state.stack],
        inputState: 'replace',
      };
    case PRESS_NUM:
      if (state.inputState === 'append') {
        return {
          stack: [(state.stack[0] || 0) + action.number, ...state.stack.slice(1)],
          inputState: 'append',
        };
      } else if (state.inputState === 'replace') {
        return {
          stack: [action.number, ...state.stack.slice(1)],
          inputState: 'append',
        };
      } else if (state.inputState === 'push') {
        return {
          stack: [action.number, ...state.stack],
          inputState: 'append',
        };
      }
      break;
    default:
      return state;
  }
};
