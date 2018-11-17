import React, { Component } from 'react';

class GifContainer extends Component {
	constructor() {
		super()
	}

	render() {
		debugger;
		return (
			<div>
				<img src={ this.props.gif.bitly_gif_url } />
			</div>
		)
	}
}

export default GifContainer;