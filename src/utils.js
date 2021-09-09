export const mathAction = (operator, a, b) => {
  let resNum = 0;
  switch (operator) {
    case "+":
      resNum = a + b;
      break;
    case "-":
      resNum = a - b;
      break;
    case "/":
      resNum = a / b;
      break;
    case "*":
      resNum = a * b;
      break;

    default:
      console.log("default err");
      break;
  }
  resNum = Math.floor(resNum * 100000) / 100000;
  return { resNum: resNum, resTxt: `${a}${operator}${b}=${resNum}` };
};
