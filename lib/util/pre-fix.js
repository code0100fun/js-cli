export default function(operator, ...args) {
  if (operator === '+') {
    return args.reduce((a, b, i) => a + b);
  }
}
