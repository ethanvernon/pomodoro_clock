import React, { Component } from 'react';

export class Clock extends Component {

	

	render() {
		return(
		  <div className="container no-padding" id='box'>
		    <div className="row">
		      <div className="col my-box">
		        <h3 id="timer-label">Session</h3>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col my-box" id="time-left">
		        {this.props.timeLeft}
		      </div>
		    </div>
		  </div>
		)
	}

}

