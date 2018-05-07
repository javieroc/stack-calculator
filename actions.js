export const PRESS_NUM = 'PRESS_NUM';
export const ENTER = 'ENTER';
export const OPERATION = 'OPERATION';
export const CLEAR = 'CLEAR';
export const SWAP = 'SWAP';
export const TOGLE_NEGATIVE = 'TOGGLE_NEGATIVE';

// Action creator
export const pressNum = number => ({
  type: PRESS_NUM,
  number,
});

export const enter = () => ({
  type: ENTER,
});

export const operation = op => ({
  type: OPERATION,
  op,
});

export const clear = () => ({
  type: CLEAR,
});

export const swap = () => ({
  type: SWAP,
});

export const toggleNegative = idx => ({
  type: TOGLE_NEGATIVE,
  idx,
});

