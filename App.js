/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Home from './src/Component/Home';
import PlaySection from './src/Component/PlaySection';

const App = () => {
  const [num, setnum] = useState(0);

  const onNumSelect = number => {
    setnum(parseInt(number));
  };

  return (
    <>
      {num ? <PlaySection number={num} /> : <Home onSelect={onNumSelect} />}
    </>
  );
};

export default App;
