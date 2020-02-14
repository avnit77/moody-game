export const COFFEE = 'COFFEE';
export const coffee = () => ({
  name: COFFEE,
  text: 'Drink Coffee',
  stateName: 'coffees'
});

export const EAT = 'EAT';
export const eat = () => ({
  name: EAT,
  text: 'Snack',
  stateName: 'snacks'
});

export const SLEEP = 'SLEEP';
export const sleep = () => ({
  name: SLEEP,
  text: 'Nap',
  stateName: 'naps'
});

export const STUDY = 'STUDY';
export const study = () => ({
  name: STUDY,
  text: 'Study',
  stateName: 'studies'
});

// export const actions = [
//   { name: 'COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
//   { name: 'EAT', text: 'Snack', stateName: 'snacks' },
//   { name: 'SLEEP', text: 'Nap', stateName: 'naps' },
//   { name: 'STUDY', text: 'Study', stateName: 'studies' },
// ];
