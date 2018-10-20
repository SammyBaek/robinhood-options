import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                SearchBar
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
)(SearchBar);
