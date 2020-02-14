import {
  coffee,
  eat,
  sleep,
  study
} from '../actions/moodActions';

const actions = [coffee(), eat(), sleep(), study()];

export const getActions = (state) => {
  return actions.map(action => {
    return { ...action, count:state[action.stateName] };
  });
}
;
