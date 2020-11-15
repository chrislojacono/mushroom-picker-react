# The Mushroom Picker
This was a bonus assignment while learning react to make a website where you could pick random mushrooms, they would be added to you basket and different actions would occur depending if the mushrooms were deadly, psychoactive or edible.

## The Motivation
I chose to do this extra assignment to become more comfortable changing state and using props with react. I got to mess around with hooks and using semantic UI for react which was new and I really enjoyed. This was one of our first projects in react so it was fun to get to use all the features that React.js has to offer. I also got to plug in react router into this project and test out what we had learned in class.

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/38c4f931-fa5c-4192-9dac-779a7cf65324/deploy-status)](https://app.netlify.com/sites/mushroom-picker/deploys)

## Code Style
Im using eslintrc and React.strictmode

## Screenshots
![screencapture-localhost-3000-2020-11-15-10_06_56](https://user-images.githubusercontent.com/66916708/99190280-40d96c80-272b-11eb-8647-5eb18e7ff0bd.png)

## Tech Framework
React.js

## Code Example
```
  pickAMushroom = () => {
    const randomMushroom = this.state.mushrooms[
      Math.floor(Math.random() * this.state.mushrooms.length)
    ];
    if (
      randomMushroom.isDeadly === false
      && randomMushroom.isPoisonous === false
      && randomMushroom.isMagic === false
    ) {
      this.setState({
        basket: this.state.basket.concat(randomMushroom),
        youWin: false,
        recentMushroom: randomMushroom.name,
      });
    }
    if (randomMushroom.isDeadly === true) {
      this.setState({
        basket: [],
        youWin: false,
        recentMushroom: randomMushroom.name,
      });
    }
    if (randomMushroom.isMagic === true) {
      this.setState({
        basket: this.state.basket.concat(mushroomData.getNonMagic()),
        youWin: true,
        recentMushroom: randomMushroom.name,
      });
    }
  };
  ```
  ## Deployed Site
  [Netlify Link](https://mushroom-picker.netlify.app/)
  
