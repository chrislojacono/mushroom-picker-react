import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const Mushroom = ({ mushrooms }) => (
  <Card className="mushCard"
    image={mushrooms.imgUrl}
    header={mushrooms.name}
    description={mushrooms.description}
  />
);

export default Mushroom;
