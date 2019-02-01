import React, { Component } from 'react';

export class StopStart extends Component {

	

	render() {
		return(
			<div className="container" id='bottom'>
			    <div className="row no-padding">
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='start-stop'>
				        <i className="fas fa-circle fa-stack-2x"></i>
				        <i className="fa fa-play fa-stack-1x" id='button-switch'></i>
			      	</span>
			      </div>
			      <div className="col no-padding">
			        <span className="fa-stack fa-2x" id='reset'>
				        <i className="fa fa-circle fa-stack-2x"></i>
				        <i className="fa fa-redo fa-stack-1x"></i>
			      	</span>
			      </div>
			    </div>
			</div>
		)
	}

}

