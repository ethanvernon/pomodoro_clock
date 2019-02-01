import React, { Component } from 'react';

export class IncrementersAndDecrementers extends Component {

	

	render() {
		return(
			<div className="container" id='lengths_and_buttons'>
			    <div className="row">
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-decrement'>
			          <i className="fa fa-circle fa-stack-2x"></i>
			          <i className="fa fa-arrow-down fa-stack-1x"></i>
			        </span>
			      </div>
			      <div className="col no-padding">
			        <h3 id="break-length" className='length'>5</h3>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='break-increment'>
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
			        <h3 id="session-length" className='length'>25</h3>
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

