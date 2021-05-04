import React from 'react';
//import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import _ from 'lodash';

export const REFRESH_MESSAGE = 'Please refresh the page and try again. If the request still fails, please contact an administrator.';

class SimpleErrorAlert extends React.Component {

    constructor(props) {
        super(props);
      //  autoBind(this);
    }

    static parseFormErrors(errors) {
        return _.map(errors, (value,key) => {
            return ( 
                <div key={key}>
                    <strong>{value.message}</strong><br/>
                    <span>{value.exception}</span>
                </div>
            );
        });
    }
    render() {

        const visibleCss = 'visible';
        const invisibleCss = 'invisible';

        const visibility = this.props.show ? visibleCss : invisibleCss;

        return (
            <div className={`alert alert-danger mt-3 ${visibility}`} >
                {SimpleErrorAlert.parseFormErrors(this.props.errors)}
            </div>
        );
    }
}

export default SimpleErrorAlert;

SimpleErrorAlert.propTypes = {
    errors: PropTypes.any,
    show: PropTypes.bool
};
