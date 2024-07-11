export default (num) => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
