export const sleep = (delay = 700) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
