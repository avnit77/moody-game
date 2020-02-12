import reducer from './moodReducer';
import { coffee, eat, sleep, study } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles the COFFEE case', () => {
    const action = coffee();
    const initialState = { coffees: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('handles the SLEEP case when initial state is  count 1', () => {
    const action = sleep();
    const initialState = { sleeps: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ sleeps: 2 });
  });

  it('handles the EAT case', () => {
    const action = eat();
    const initialState = { eats: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ eats: 3 });
  });

  it('handles the STUDY case when initial state is studies 3', () => {
    const action = study();
    const initialState = { studies: 3 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 4 });
  });

});
