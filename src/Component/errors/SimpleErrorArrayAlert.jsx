import React from 'react';
import autoBind from 'react-autobind';

class SimpleErrorArrayAlert extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    parseFormErrors(errors) {
        console.log(errors);
        const result = _.map(errors, (value,key) => {
            return ( 
                <div key={key}>
                    <i>{value.message}</i><br/>
                    <span>{value.exception}</span>
                </div>
            );
        });
        return result;
    }

    renderErrors() {

        const visibleCss = 'visible';
        const invisibleCss = 'invisible';

        const visibility = this.props.show ? visibleCss : invisibleCss;

        return _(this.props.errors).map(error => {
            return (
                <div className={`alert alert-danger mt-3 ${visibility}`} >
                    {this.parseFormErrors(error)}
                </div>
            );
        }).value();
    }
    render() {

        

        return (
            <div>{this.renderErrors()}</div>
        );
    }
}

export default SimpleErrorArrayAlert;
