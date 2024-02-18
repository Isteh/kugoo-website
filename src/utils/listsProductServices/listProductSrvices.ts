export type TypeListsProductServices = {
  name: string;
  value: number | string;
  discount?: number;
}[];

export type TypeDefaultListsProductServices = {
  complectation: TypeListsProductServices;
  guarantee: TypeListsProductServices;
  additionalServices: TypeListsProductServices;
  color: TypeListsProductServices;
};

export const defaultListsProductServices: TypeDefaultListsProductServices =
  {
    complectation: [
      {
        name: 'Базовая',
        value: 0,
      },
    ],
    guarantee: [
      {
        name: 'Стандартная 1 год',
        value: 0,
      },
    ],
    additionalServices: [
      {
        name: 'Нет',
        value: 0,
      },
    ],
    color: [
      {
        name: 'Без упаковки',
        value: 'none',
      },
      {
        name: 'Розовый',
        value: 'pink',
      },
      {
        name: 'Синий',
        value: 'blue',
      },
      {
        name: 'Красный',
        value: 'red',
      },
    ],
  };

export const getServicesList = (
  type:
    | 'color'
    | 'additionalServices'
    | 'guarantee'
    | 'complectation',
  items?: TypeListsProductServices | undefined
) => {
  if (items && items.length) {
    return [
      ...defaultListsProductServices[type],
      ...items,
    ];
  }
  return defaultListsProductServices[type];
};
