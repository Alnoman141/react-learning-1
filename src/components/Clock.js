import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        // this.handleClick = this.handleClick.bind(this);
    }

    // state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (msg) => {
        clearInterval(this.clockTimer);
        console.log(msg);
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { locale } = this.props;
        const { date } = this.state;
        console.log('clock component renders');
        return (
            <div>
                <h1 className="heading">
                    <span className="span">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} msg="I have clicked">
                    Click me
                </Button>
            </div>
        );
    }
}

export default Clock;
