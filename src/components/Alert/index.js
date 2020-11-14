import React from 'react';
import { useAlert } from 'react-alert';

const Alert = (props) => {
  const alert = useAlert();

  return (
    <button className="btn btn-outline-info mr-3"
      onClick={() => {
        alert.show(`Oh look, a ${props.recentMushroom}`);
      }}
    >
      Show Most Recent Mushroom Picked
    </button>
  );
};

export default Alert;
