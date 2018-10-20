import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableInfo extends React.Component {
    render() {
        return (
            <div>
                Table Info
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
)(TableInfo);
