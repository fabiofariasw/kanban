import { v4 as uuid } from 'uuid';

export const board = [
  {
    id: uuid(),
    name: 'prospection',
    cards: [
      {
        id: uuid(),
        status: 'consigned',
        name: 'Carlinhos1',
        product: 'Ford Ka Sedan',
        date: '10/12/2022',
        value: 'R$ 1.000,00',
        license: 'MWU-0388'
      },
      {
        id: uuid(),
        status: 'consigned',
        name: 'Carlinhos2',
        product: 'Ford Ka Sedan',
        date: '10/12/2022',
        value: 'R$ 1.000,00',
        license: 'MWU-0388'
      },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Sedan',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Sedan',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      // {
      //   id: uuid(),
      //   status: 'consigned',
      //   name: 'Carlinhos1',
      //   product: 'Ford Ka Hatch',
      //   date: '10/12/2022',
      //   value: 'R$ 1.000,00'
      // },
      {
        id: uuid(),
        status: 'consigned',
        name: 'Car linhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      },
      {
        id: uuid(),
        status: 'canceled',
        name: 'Carlinhos4',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'negociation',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'order',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'billing',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'legalization',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'delivery',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  },
  {
    id: uuid(),
    name: 'comission',
    cards: [
      {
        id: uuid(),
        status: 'brokered',
        name: 'Carlinhos3',
        product: 'Ford Ka Hatch',
        date: '10/12/2022',
        value: 'R$ 1.000,00'
      }
    ]
  }
];
