export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😠  >:-( ';
  if(isHyper(state) && isHungry(state)) return '😱 >:-O ';
  if(isTired(state)) return '😴 zzz';
  if(isHyper(state)) return '😳 :-O ';
  if(isEducated(state)) return '🧐 8-/ ';
  if(isHungry(state)) return '😡 :-( ';

  return '😄 :-) ';
};
