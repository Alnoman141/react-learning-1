import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChnage, msg: currentMsg } = this.props;
        const { change: nextChnage, msg: nextMsg } = nextProps;

        if (currentChnage === nextChnage && currentMsg === nextMsg) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button component renders');
        const { change, msg } = this.props;
        return (
            <button type="button" onClick={() => change(msg)}>
                Click me
            </button>
        );
    }
}
export default Button;
