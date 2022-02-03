
import { connect } from 'react-redux';
import React, { Component } from 'react';

 class Player extends Component {
  render() {
    return <div></div>;
  }
}

const mapSteToProps = (state) => {
return{
    movie: state.movieReducer.selectedMovie,
    category: state.movieReducer.selectedCategory,
}
}

export default connect(mapSteToProps)(Player)