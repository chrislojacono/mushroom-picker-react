import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

export default class Mushroom extends Component {
  render() {
    const { mushrooms } = this.props;
    return (
        <Card className="mushroomCard">
          <CardBody>
            <CardTitle tag='h5'>{mushrooms.name}</CardTitle>
          </CardBody>
          <div className="cardImage" style={{ backgroundImage: `url(${mushrooms.imgUrl})` }}></div>
          <CardBody>
            <CardText className="mushroomText">
              {mushrooms.description}
            </CardText>
          </CardBody>
        </Card>
    );
  }
}
