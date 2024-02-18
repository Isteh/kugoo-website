export const getDataForCart = (
  idProduct: number,
  price: number,
  complectation: number,
  guarantee: number,
  additionalServices: number,
  quantity: number,
  colorWrapper?: string
) => {
  return {
    id:
      Math.random() * (4564786 - -254673) +
      4564786,
    idProduct: idProduct,
    complectation: complectation,
    guarantee: guarantee,
    additionalServices: additionalServices,
    colorWrapper: colorWrapper,
    fullPrice:
      price +
      complectation +
      guarantee +
      additionalServices,
    quantity: quantity,
  };
};
