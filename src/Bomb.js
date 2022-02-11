// your Bomb code here!
import React from 'react'

// The initial state of Bomb should have a property called secondsLeft
// The initial value of secondsLeft should be equal to the initialCount 
// prop of our Bomb component.
export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!'
// , where <SECONDS_LEFT> is the value of secondsLeft.

// If secondsLeft equals 0, it should render 'Boom!' instead.

    render() {
        return (
            <div>
                {/* if this.secondsLeft > 0
                <span>{this.secondsLeft} seconds left before I go boom!</span>
                else if this.secondsLeft = 0
                <span>Boom!</span> */
                this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

