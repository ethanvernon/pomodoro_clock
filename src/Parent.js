import React, { Component } from 'react';
import {Title} from './Title';
import {Labels} from './Labels';
import {IncrementersAndDecrementers} from './IncrementersAndDecrementers';
import {Clock} from './Clock';
import {StopStart} from './StopStart';
import {Audio} from './Audio';

export class Parent extends Component {



	render() {
		return(
			<div>
				<Title/>
				<Labels/>
				<IncrementersAndDecrementers/>
				<Clock/>
				<StopStart/>
				<Audio/>
			</div>
		)
	}

}