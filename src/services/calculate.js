import operate from './operate';

const numpadRegExp = /^(\d||\.){1}$/;
const operatorRegExp = /^(x||%||÷||\+||\-||=){1}$/;
const specialKeyRegExp = /^(AC||\+\/\-){1}$/;
const errorTemplate = {
  total: null,
  next: null,
  operation: null,
  calculated: null,
  error: true
}


export default (data, buttonName) => {
  try {
    if (numpadRegExp.test(buttonName))
      return processNumpadAction(data, buttonName);
    if (operatorRegExp.test(buttonName))
      return processOperatorAction(data, buttonName);
    if (specialKeyRegExp.test(buttonName)) {
      return processSpecialKeyAction(data, buttonName);
    }
  } catch (e) {
    return errorTemplate;
  }
}

const processNumpadAction = (data, action) => {
  let { total, next, operation, calculated } = data;

  if (calculated) {
    total = null;
    next = null;
    operation = null;
    calculated = false;
  }

  if(action === '.') {
    if (total) {
      if (operation && !next.includes('.')) {
        next += '.';
      } else if (!operation && !total.includes('.')) {
        total += '.';
      }
    } else {
      total = '0.';
    }
  } else {
    if (operation) {
      if (next && next[0] === '0' && next[1] !== '.') {
        next = action;
      } else {
        next = (next) ? next + action : action;
      }
    } else {
      if (total && total[0] === '0' && total[1] !== '.') {
        total = action;
      } else {
        total = (total) ? total + action : action;
      }
    }
  }
  return { total, next, operation, calculated, error: null };
}

const processOperatorAction = (data, action) => {
  let { total, next, operation, calculated } = data;

  if (operation) {
    if (next) {
      total = operate(total, next, operation);
      next = null;
      if (action === '=') {
        calculated = true;
        operation = null;
      } else {
        operation = action;
      }
    }
  } else {
    if(total && !next && action !== '=') {
      calculated = false;
      operation = action;
    }
  }
  return { total, next, operation, calculated, error: null };
}

const processSpecialKeyAction = (data, action) => {
  let { total, next, operation, error } = data;

  if (action === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (action === '+/-') {
    if (next) {
      if (next !== '0') {
        next = operate(next, '-1', 'x');
      }
    } else {
      if (total && !operation && total !== '0') {
        total = operate(total, '-1', 'x');
      }
    }
  }
  return { total, next, operation, error: null };
}
