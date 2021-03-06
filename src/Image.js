import React, { Component } from 'react';

const { ipcRenderer } = window.require('electron');
//const ipcRenderer = electron.ipcRenderer;

class Image extends Component {
  state = {
		imageUrl: ''
	}
	ComponentDidMount() {
		ipcRenderer.on('image', (event, arg) => {
			this.setState({
				imageUrl: arg
			})
		})
	}
	render() {
		return (
				<img src={this.state.imageUrl} alt="image" style={{maxWidth: '100%'}} />
		);
	}
}

export default Image;