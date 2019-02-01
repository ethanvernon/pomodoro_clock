import React, { Component } from 'react';

export class IncrementersAndDecrementers extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(label, direction) {
		if (label==='break') {
			this.props.changeBreak(direction);
		}
	}

	render() {
		return(
			<div className="container" id='lengths_and_buttons'>
			    <div className="row">
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-decrement' onClick={() => this.handleClick('break', 'dec')}>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-arrow-down fa-stack-1x"></i>
			        </span>
			      </div>
			      <div className="col no-padding">
			        <h3 id="break-length" className='length'>{this.props.breakLength}</h3>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-increment' onClick={() => this.handleClick('break', 'inc')}>>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-arrow-up fa-stack-1x"></i>
			        </span>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='session-decrement'>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-arrow-down fa-stack-1x"></i>
			        </span>
			      </div>
			      <div className="col no-padding">
			        <h3 id="session-length" className='length'>{this.props.sessionLength}</h3>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='session-increment'>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-arrow-up fa-stack-1x"></i>
			        </span>
			      </div>
			    </div>
			</div>
		)
	}

}

