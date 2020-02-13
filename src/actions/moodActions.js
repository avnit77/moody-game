export const COFFEE = 'COFFEE';
export const coffee = () => ({
  type: COFFEE,
});

export const EAT = 'EAT';
export const eat = () => ({
  type: EAT,
});

export const SLEEP = 'SLEEP';
export const sleep = () => ({
  type: SLEEP,
});

export const STUDY = 'STUDY';
export const study = () => ({
  type: STUDY,
});

export const actions = [
  { name: 'COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT', text: 'Snack', stateName: 'snacks' },
  { name: 'SLEEP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];
