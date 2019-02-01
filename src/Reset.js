import React, { Component } from 'react';

export class Reset extends Component {
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
	        <span className="fa-stack fa-2x" id='reset' onClick={this.handleClick}>
		        <i className="fa fa-circle fa-stack-2x"></i>
		        <i className="fa fa-redo fa-stack-1x"></i>
	      	</span>
	      </div>
		)
	}

}

