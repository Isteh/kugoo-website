export const getDataForCart = (
  id: number,
  idProduct: number,
  price: number,
  complectation: number,
  guarantee: number,
  additionalServices: number,
  colorWrapper?: string
) => {
  return {
    id: id,
    idProduct: idProduct,
    complectation: complectation,
    guarantee: guarantee,
    additionalServices: additionalServices,
    colorWrapper: colorWrapper,
    fullPrice: price + complectation + guarantee + additionalServices,
  };
};
