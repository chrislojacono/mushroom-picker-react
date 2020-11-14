import React from 'react';
import { useAlert } from 'react-alert';

const App = (props) => {
  const alert = useAlert();

  return (
    <button
      onClick={() => {
        alert.show(`Oh look, a ${props.recentMushroom}`);
      }}
    >
      Show Alert
    </button>
  );
};

export default App;
