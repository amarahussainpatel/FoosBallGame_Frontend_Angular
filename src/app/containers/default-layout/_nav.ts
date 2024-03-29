import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  // {
  //   name:'Register Form',
  //   url: 'register-team',
  //   iconComponent: { name: 'cilSpreadsheet' },
  // },
  {
    name: 'Heading',
    title: true
  },
  {
    name: 'Tournament',
    url: '/base',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Add Tournament',
        url: 'create-tournament'
      },
      {
        name: 'View All',
        url: 'player-info'
      },
    ]
  },
  {
    name: 'Teams',
    url: '/base',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Add Teams',
        url: 'register-team'
      },
      {
        name: 'Assign Players',
        url: 'assign-players'
      },
      {
        name: 'View All',
        url: '/base/cards'
      },
    ]
  },
  {
    name: 'Players',
    url: '/base',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Add Players',
        url: 'register-players'
      },
      // {
      //   name: 'Assign Team',
      //   url: 'assign-team'
      // },
      {
        name: 'View All',
        url: 'player-info'
      },
    ]
  },
  {
    name: 'Parent Component',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Child 1',
        url: '/buttons/buttons'
      },
      {
        name: 'Child 2',
        url: '/buttons/button-groups'
      },
      {
        name: 'Child 3',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Child 4',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Heading 2',
    title: true
  },
  {
    name: 'Parent ',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Child 1',
        url: 'fooseball-team',
      },
      {
        name: 'Child 2',
        url: '/forms/select'
      },
      {
        name: 'Child 3',
        url: '/forms/checks-radios'
      },
      {
        name: 'Child 4',
        url: '/forms/range'
      },
    ]
  },
];
