import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Login from '../components/Login';
import SearchBar from '../components/SearchBar';
import Order from '../components/Order';
import StockInfo from '../components/StockInfo';
import TableInfo from '../components/TableInfo';


class AppContainer extends React.Component {
    render() {
        debugger
        if (!this.props.token) {
            return (<Login />);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <StockInfo />
                        <TableInfo />
                    </div>
                    <div className="col-md-3">
                        <Order />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        token: state.token
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(AppContainer);
