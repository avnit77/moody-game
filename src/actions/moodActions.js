export const COFFEE = 'COFFEE';
export const coffee = () => ({
  type: COFFEE,
  stateName: 'coffees'
});

export const EAT = 'EAT';
export const eat = () => ({
  type: EAT,
  stateName: 'eats'
});

export const SLEEP = 'SLEEP';
export const sleep = () => ({
  type: SLEEP,
  stateName: 'sleeps'
});

export const STUDY = 'STUDY';
export const study = () => ({
  type: STUDY,
  stateName: 'studies'
});

// export const CHANGE_NUMBER = 'CHANGE_NUMBER';
// export const changeNumber = number => {
//   const payload = Number(number);
//   if(isNaN(payload)) throw `${number} is not a number`;

//   return {
//     type: 'CHANGE_NUMBER',
//     payload
//   };
// };
