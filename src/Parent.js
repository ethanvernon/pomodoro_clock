import React, { Component } from 'react';
import {Title} from './Title';
import {Labels} from './Labels';
import {IncrementersAndDecrementers} from './IncrementersAndDecrementers';
import {Clock} from './Clock';
import {StopStart} from './StopStart';
import {Audio} from './Audio';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			breakLength: 5,
			sessionLength: 25,
			minutes: 25,
			seconds: 0,
			startStop: 0,
			counter: 0,
			sessionBreak: 0
	    }

		this.changeBreak = this.changeBreak.bind(this);
	}

	changeBreak(direction) {
		let breakLength = this.state.breakLength;

		if (direction==='dec' && this.state.startStop==0 && this.state.breakLength-1>0) {
			breakLength-=1;			
		}

		this.setState({
			breakLength: breakLength
		})

	}



	render() {
		return(
			<div>
				<Title/>
				<Labels/>
				<IncrementersAndDecrementers
					breakLength={this.state.breakLength}
					sessionLength={this.state.sessionLength}
					changeBreak={this.changeBreak}/>
				<Clock/>
				<StopStart/>
				<Audio/>
			</div>
		)
	}

}