import React from 'react'

class Spaceship extends React.Component {

  render(props) {

    return (
    <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.speed}</h2>
      <h2>{this.props.hasRockets ? 'has rockets' : 'no rockets'}</h2>
      <h2>{this.props.colors}</h2>
    </div>

    ) // end return
  } // end render
} // end component

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
