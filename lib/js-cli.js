import preFix from 'util/pre-fix';

function add(a, b) {
  return preFix('+', a, b);
}
export { add };
