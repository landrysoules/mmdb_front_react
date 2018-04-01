import React from 'react';
import TheaterContainer from './TheaterContainer';

//FIXME: Look into SearchBarContainer. Here actions airingtv and airingtheater can't be called from onclick but when we launch the app 1st time (not on every call to home)
const HomeContainer = () => <TheaterContainer />;

export default HomeContainer;
