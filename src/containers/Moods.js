import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/selectors';
import { getActions } from '../selectors/actionSelectors';
import reducer from '../reducers/moodReducer';


const Moods = () => {

  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });
  const face = getFace(state);

  const handleSelection = (name) => dispatch(name);
  const actions = getActions(state);

  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
