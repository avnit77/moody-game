
import {
  COFFEE,
  EAT,
  SLEEP,
  STUDY
} from '../actions/moodActions';

export default function reducer(state, action) {
  switch(action.type) {
    case COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT:
      return { ...state, eats: state.eats + 1 };
    case SLEEP:
      return { ...state, sleeps: state.sleeps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
    default:
      return state;
  }
}
