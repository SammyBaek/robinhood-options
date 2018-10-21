import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableInfo extends React.Component {
    render() {
        const ls = this.props.optionsInst.sort((a, b) => {
            return b.strikePrice.localeCompare(a.strikePrice);
        });
        const entries = ls.map((entry, ind) => (
            <tr>
                <th scope="row">{ind}</th>
                <td>{entry.strikePrice}</td>
                <td>{entry.cost}</td>
            </tr>

        ));

        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Strike Price</th>
                    <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    { entries }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        optionsInst: state.optionsInst
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
