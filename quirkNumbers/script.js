const add = (a, b) => new Promise((res) => setTimeout(() => res(a + b), 2000));

const mul = (a, b) => new Promise((res) => setTimeout(() => res(a * b), 2000));

const sub = (a, b) => new Promise((res) => setTimeout(() => res(a - b), 2000));

const div = (a, b) => new Promise((res) => setTimeout(() => res(a / b), 2000));

const operators = {
  "+": add,
  "-": sub,
  "*": mul,
  "/": div,
};

const quirkNumbers = (str) => {
  return str.split(" ").reduce(async (acc, cur) => {
    const accum = await acc;
    console.log("accum", accum);
    if (!(cur in operators)) {
      accum.push(cur);
    }
    if (cur in operators) {
      const g = await operators[cur](+accum.pop(), +accum.pop());

      accum.push(g);
    }
    return accum;
  }, []);
};

quirkNumbers("1 2 + 3 * 4 +").then((res) => console.log(res));
