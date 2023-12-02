const numberFromater = (num: number) => {
  const formater = new Intl.NumberFormat("en-US");

  return formater.format(num);
};

export default numberFromater;
