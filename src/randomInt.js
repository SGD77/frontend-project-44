const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); // min to max random int
};
export default random;
