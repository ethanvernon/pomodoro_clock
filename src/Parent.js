import React, { Component } from 'react';
import {Title} from './Title';
import {Labels} from './Labels';
import {IncrementersAndDecrementers} from './IncrementersAndDecrementers';
import {Clock} from './Clock';
import {PlayPause} from './PlayPause';
import {Reset} from './Reset';
//import {Audio} from './Audio';
import sound from './bell.mp3';
import {AddClock} from './AddClock';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			breakLength: [{clockNumber: 0, duration: 5}],
			sessionLength: [5],
			minutes: 5,
			seconds: 0,
			playPause: 0,
			counter: 0,
			sessionBreak: 0,
			timeLeft: '05:00',
			playPauseButton: 'fa-play',
			timerLabel: 'Session',
			firstClick: 0,
			clocksCount: 1,
			elapsedTime: 0
	    };

		this.changeBreak = this.changeBreak.bind(this);
		this.changeSession = this.changeSession.bind(this);
		this.lengthChecker = this.lengthChecker.bind(this); 
		this.playPauseClicked = this.playPauseClicked.bind(this);
		this.timer = this.timer.bind(this);
		this.audio = new Audio(sound);
		this.handleReset = this.handleReset.bind(this);
		this.updateClocks = this.updateClocks.bind(this);
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

		//decrease break and break is > 0
		if (direction==='dec' && this.state.playPause==0 && breakLength[0]['duration']>1) {
			//decrease breaklength
			breakLength[0]['duration']--;
			if (this.state.sessionBreak==1) {
				seconds=0;
				minutes=this.lengthChecker(breakLength[0]['duration']);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		if (direction==='inc' && this.state.playPause==0 && breakLength[0]['duration']<59) {
			breakLength[0]['duration']= Number(breakLength[0]['duration'])+1;
			if (this.state.sessionBreak==1) {
				seconds=0;
				minutes=this.lengthChecker(breakLength[0]['duration']);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		console.log(this.lengthChecker(breakLength[0]['duration']));
		console.log(minutes);
		console.log(timeLeft);

		this.setState({
			breakLength: breakLength,
			seconds: seconds,
			minutes: minutes,
			timeLeft: timeLeft
		});
	}

	//if session inc/dec is clicked, evaluates change validity and updates accordingly
	changeSession(direction) {
		let sessionLength = this.state.sessionLength;
		let seconds = this.state.seconds;
		let minutes = this.state.minutes;
		let timeLeft= this.state.timeLeft;

		if (direction==='dec' && this.state.playPause==0 && this.state.sessionLength[0]-1>0) {
			sessionLength[0]--;
			if (this.state.sessionBreak==0) {
				seconds=0;
				minutes=this.lengthChecker(sessionLength[0]);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		if (direction==='inc' && this.state.playPause==0 && this.state.sessionLength[0]+1<=60) {
			sessionLength[0]= Number(sessionLength[0])+1;
			if (this.state.sessionBreak==0) {
				seconds=0;
				minutes=this.lengthChecker(sessionLength[0]);
				timeLeft=minutes+ ':0' + seconds;
			}
		}

		this.setState({
			sessionLength: sessionLength,
			seconds: seconds,
			minutes: minutes,
			timeLeft: timeLeft
		})
	}

	//changes start/pause button when clicked, clears or starts setInterval 
	playPauseClicked() {

		//load audio in background
		if (this.state.firstClick==0) {
			console.log(this.audio);
			this.audio.play();			
			this.audio.muted=true;
			this.audio.pause();

			this.setState({
				firstClick: 1
			});
		}

		if (this.state.playPause==0) {

			//change play to pause button
			this.setState({
				playPause: 1,
				playPauseButton: 'fa-pause',
				counter: setInterval(this.timer, 1000)
			});

		} else {
			this.setState({
				playPause: 0,
				playPauseButton: 'fa-play'
			});
      		clearTimeout(this.state.counter);
   		}
	}

	//when the play button is clicked, this is run every 1000 ms
	timer() {
		let minutes=this.state.minutes;
		let seconds=this.state.seconds;
		let elapsedTime=this.state.elapsedTime+1;

		//updats total elapsedTime
		this.setState({
			elapsedTime: elapsedTime
		});
		console.log(elapsedTime + ' seconds, ' + (elapsedTime/60).toFixed(1) + ' minutes, ' + (elapsedTime/60/60).toFixed(1) + ' hours');

		//have an extra alarm every 30mins5seconds (1805s)
		if (elapsedTime%1805==0) {
			this.audio.muted=false;
			this.audio.play(); //alert bell
		}

		//have the alarm go off continuously after 4 hours (14400s)
		if (elapsedTime>14400) {
			this.audio.muted=false;
			this.audio.play(); //alert bell
		}

		//checks various times
		if (Number(seconds) == 0 && Number(minutes) > 0) { //if ##:00
			minutes=this.lengthChecker(Number(minutes) - 1);
			seconds=59;
			this.setState({
				seconds: seconds,
				minutes: minutes,
				timeLeft: minutes + ':' + seconds
			});
		} else if (Number(seconds) == 1 && Number(minutes) == 0) { //if timer ends next second
			this.audio.muted=false;
			this.audio.play(); //alert bell
			if (this.state.sessionBreak==0) { //session ended
				minutes=this.lengthChecker(Number(this.state.breakLength[0]['duration']));
				seconds=this.lengthChecker(Number(0));
				this.setState({
					sessionBreak: 1,
					timerLabel: 'Break',
					minutes: minutes,
					timeLeft: minutes + ':' + seconds,
					seconds: seconds
				});
			} else { //break ended
				minutes=this.lengthChecker(Number(this.state.sessionLength));
				seconds=this.lengthChecker(Number(0));
				this.setState({
					sessionBreak: 0,
					timerLabel: 'Session',
					minutes: minutes,
					timeLeft: minutes + ':' + seconds,
					seconds: seconds
				});
			}
		} else { 
			seconds= this.lengthChecker(Number(seconds)-1);
			this.setState({
				seconds: seconds,
				timeLeft: minutes + ':' + seconds
			});
		}
	}

	handleReset() {
		//if running clearTimeout and change play button
		if (this.state.playPause==1) {
      		clearTimeout(this.state.counter);
			this.setState({
				playPause: 0,
				playPauseButton: 'fa-play'
			});
		}
		//reset timer in case
		this.audio.pause();
		this.audio.currentTime=0;
		//reset states to default
		this.setState({
			timerLabel: 'Session',
			timeLeft: '05:00',
			breakLength: [5],
			sessionLength: [5]
		});
	}


	//updates number of clocks or timers
	updateClocks(change) {
		var clocks=this.state.clocksCount;
		var sessionLength=this.state.sessionLength;
		var breakLength=this.state.breakLength;

		console.log(sessionLength);

		//checks parameters for which button was clicked subtract or add clock
		if (change=='subtract' && this.state.clocksCount>1) {
			clocks--;
			sessionLength.length = sessionLength.length-1;
			breakLength.length = breakLength.length-1;
		} else if (change=='add') {
			clocks++;
			sessionLength.push(25);
			breakLength.push(
				{
					'clockNumber': breakLength.length,
					'duration': 5
				}
			);
		}

		//add or subtract new clocks from break/sessionlength as places in arrays


		this.setState({
			clocksCount: clocks,
			sessionLength: sessionLength
		})
	}

	render() {
		//for each clock, need to add a clock, break and session length
		let clocks=[];
		for (var i=0; i<this.state.clocksCount; i++) {
			clocks.push(<IncrementersAndDecrementers
					breakLength={this.state.breakLength[i]}
					sessionLength={this.state.sessionLength[i]}
					changeBreak={this.changeBreak}
					changeSession={this.changeSession}/>)
		}


		return(
			<div>
				<Title/>
				<Labels/>
				{clocks}
				<AddClock
					updateClocks={this.updateClocks}/>
				<Clock
					timeLeft={this.state.timeLeft}
					timerLabel={this.state.timerLabel}/>
				<div className="container" id='bottom'>
					<div className="row no-padding">
						<PlayPause
							handleClick={this.playPauseClicked}
							playPauseButton={this.state.playPauseButton}/>
						<Reset
							handleClick={this.handleReset}/>
					</div>
				</div>
			</div>
		)
	}

}