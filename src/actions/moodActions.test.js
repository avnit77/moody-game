import {
  DRINK_COFFEE,
  drinkCoffee,
  EAT,
  eat,
  SLEEP,
  sleep,
  STUDY,
  study
} from './moodActions';

describe('mood action creators', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('creates an eat action', () => {
    const action = eat();

    expect(action).toEqual({ type: EAT });
  });

  it('creates a sleep action', () => {
    const action = sleep();

    expect(action).toEqual({ type: SLEEP });
  });

  it('creates a study action', () => {
    const action = study();

    expect(action).toEqual({ type: STUDY });
  });

});
