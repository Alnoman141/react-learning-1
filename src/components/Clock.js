import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    //     // this.handleClick = this.handleClick.bind(this);
    // }

    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // const { locale } = this.props;
        const { date, locale } = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = <Button change={this.handleClick} locale="en-US" />;
        // } else {
        //     button = <Button change={this.handleClick} locale="bn-BD" />;
        // }
        return (
            <div>
                <h1 className="heading">
                    <span className="span">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} show={false} locale="en-US" />
                ) : (
                    <Button change={this.handleClick} show locale="bn-BD" />
                )}
            </div>
        );
    }
}

export default Clock;
