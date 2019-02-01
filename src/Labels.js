import React, { Component } from 'react';

export class Labels extends Component {

  

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col no-padding">
            <h3 id="break-label" className='my-label'>Break Length</h3>
          </div>
          <div className="col no-padding">
            <h3 id="session-label" className='my-label'>Session Length</h3>
          </div>
        </div>
      </div>
    )
  }

}




