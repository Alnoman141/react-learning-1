import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChnage, locale: currentLocale } = this.props;
        const { change: nextChnage, locale: nextLocale } = nextProps;

        if (currentChnage === nextChnage && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    Click Me
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}
export default Button;
