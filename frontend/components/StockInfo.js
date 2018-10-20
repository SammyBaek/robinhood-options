import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StockInfo extends React.Component {
    render() {
        return (
            <div>
                Stock Info
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockInfo);
