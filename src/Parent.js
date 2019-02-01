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
			sessionBreak: 0,
			timeLeft: '25:00'
	    }

		this.changeBreak = this.changeBreak.bind(this);
		this.lengthChecker = this.lengthChecker.bind(this); 
	}

	//takes string and concats 0 if single digit
	lengthChecker(str) { 
		str=str.toString();
		
		if (str.length < 2) {
			str='0'+str;
			return str;
		}

		return str;
	}

	//if break inc/dec is clicked, evaluates change validity and updates accordingly
	changeBreak(direction) {
		let breakLength = this.state.breakLength;
		let seconds = this.state.seconds;
		let minutes = this.state.minutes;
		let timeLeft= this.state.timeLeft;

		if (direction==='dec' && this.state.startStop==0 && this.state.breakLength-1>0) {
			breakLength-=1;
			if (this.state.sessionBreak==1) {
				seconds=0;
				minutes=this.lengthChecker(breakLength);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		if (direction==='inc' && this.state.startStop==0 && this.state.breakLength+1<=60) {
			breakLength= Number(breakLength)+1;
			if (this.state.sessionBreak==1) {
				seconds=0;
				minutes=this.lengthChecker(breakLength);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		this.setState({
			breakLength: breakLength,
			seconds: seconds,
			minutes: minutes,
			timeLeft: timeLeft
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