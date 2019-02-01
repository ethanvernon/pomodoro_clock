import React, { Component } from 'react';

export class PlayPause extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick();
	}

	

	render() {
		return(
	      <div className="col no-padding">
	        <span className="fa-stack fa-2x" id='start-stop' onClick={this.handleClick}>
		        <i className="fas fa-circle fa-stack-2x"></i>
		        <i className={"fa " + this.props.playPauseButton + " fa-stack-1x"} id='button-switch'></i>
	      	</span>
	      </div>
		)
	}

}

