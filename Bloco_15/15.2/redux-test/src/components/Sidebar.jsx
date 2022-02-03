import { connect } from "react-redux"
import React, { Component } from 'react';
import {selectedMovie}from '../store/actions/index'

class Sidebar extends Component {
  render() {
      const { categories } = this.state
      const {handleMovieClick} = this.props
    return <div>

    <button onClick={() => handleMovieClick}></button>
    </div>;
  }
}


const mapDispatchToProps = (dispach) => {
return {
    handleMovieClick: (movie, category) => dispach(selectedMovie(movie, category)),

}
}

export default connect(null,mapDispatchToProps)(Sidebar)