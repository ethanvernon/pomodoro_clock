import React, { Component } from 'react';

export class AddClock extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(direction) {
		this.props.updateClocks(direction);
	}

	render() {
		return(
			<div className="container" id='add_clock'>
			    <div className="row">
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-decrement' onClick={() => this.handleClick('subtract')}>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-minus fa-stack-1x"></i>
			        </span>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-increment' onClick={() => this.handleClick('add')}>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-plus fa-stack-1x"></i>
			        </span>
			      </div>
			    </div>
			</div>
		)
	}

}

