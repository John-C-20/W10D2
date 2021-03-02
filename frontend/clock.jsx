import React from 'react'; 

export default class Clock extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {time: new Date()}
        this.tick = this.tick.bind(this)
    }

    render() {
        const day = this.state.time.getDay();
        const month = this.state.time.getMonth();
        const date = this.state.time.getDate();
        const year = this.state.time.getFullYear();
        return (
            <>
            <h1>The Johns' Big Clock</h1>
                <div>Time</div>
                <p id='clock'>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
                <div>Date</div>
                <p id='date'>{day} {month} {date} {year}</p>
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



