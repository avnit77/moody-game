export const DRINK_COFFEE = 'DRINK_COFEE';
export const drinkCoffee = () => ({
  type: DRINK_COFFEE
});

export const EAT = 'EAT';
export const eat = () => ({
  type: EAT
});

export const SLEEP = 'SLEEP';
export const sleep = () => ({
  type: SLEEP
});

export const STUDY = 'STUDY';
export const study = () => ({
  type: STUDY
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