import React from 'react'; 

export default class Clock extends React.Component {
    constructor(banana) {
        super(banana)
        this.state = {time: new Date()}
        this.tick = this.tick.bind(this)
    }

    render() {
        return (
            <>
            <h1>The Johns' Big Clock</h1>
                <div id="clock">
                    <div id="time-div">
                        <p>Time: </p>
                        <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
                    </div>
                    <div id="date-div">
                        <p>Date: </p>
                        <p>{this.state.time.toDateString()}</p>
                    </div>
                </div>
            </>
        )
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }





}



