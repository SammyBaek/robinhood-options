import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTableInfo } from '../actions/index';

class StockInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: 'buy',
            orderType: 'call',
            expDate: props.expirationDates[0]
        };

        this.toggleDirection = this.toggleDirection.bind(this);
        this.toggleType = this.toggleType.bind(this);
        this.handleExpChange = this.handleExpChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ticker !== this.props.ticker) {
            this.setState({ expDate: this.props.expirationDates[0] });
            this.props.getTableInfo(this.props.token, this.props.ticker, this.state.orderType, this.props.expirationDates[0]);
        }
    }

    changeColorType(e) {
        let color = '#000000'
        if (e.target.name == "put") {
            color = '#FF6340'
        }  else {
            color = '#21CE99'
        }
        let loss = false;
        const limit = document.getElementById('limit').style.background;
        if (limit == "" || limit == 'rgb(102, 102, 102)') {
            loss = true;
        }
        const grey = '#666666';
        const list = document.getElementsByClassName('btn');
        for (let i of list) {
            if (i.name == "call" || i.name == "put") {
                if (i.name == e.target.name) {
                    i.style.background = color;
                } else {
                    i.style.background = grey;
                }
            } else if (i.name == "search" || i.name == "submit") {
                i.style.background = color;
            } else {
                if (i.name == this.state.direction || ((loss && (i.name == "loss")) || (!loss && (i.name == "limit")))) {
                    i.style.background = color;
                } else {
                    i.style.background = grey;
                }
            }
        }
    }

    changeColorDirection(e) {
        let color = '#000000'
        if (this.state.orderType == "put") {
            color = '#FF6340'
        }  else {
            color = '#21CE99'
        }
        let loss = false;
        const limit = document.getElementById('limit').style.background;
        if (limit == "" || limit == 'rgb(102, 102, 102)') {
            loss = true;
        }
        const grey = '#666666';
        const list = document.getElementsByClassName('btn');
        for (let i of list) {
            if (i.name == "buy" || i.name == "sell") {
                if (i.name == e.target.name) {
                    i.style.background = color;
                } else {
                    i.style.background = grey;
                }
            } else if (i.name == "search" || i.name == "submit") {
                i.style.background = color;
            } else {
                if (i.name == this.state.orderType || ((loss && (i.name == "loss")) || (!loss && (i.name == "limit")))) {
                    i.style.background = color;
                } else {
                    i.style.background = grey;
                }
            }
        }
    }

    toggleDirection(e) {
        if (this.state.direction !== e.target.name) {
            this.changeColorDirection(e);
            this.setState({ direction: e.target.name });
        }
    }

    toggleType(e) {
        if (this.state.orderType !== e.target.name) {
            this.setState({ orderType: e.target.name });
            this.changeColorType(e);
            this.props.getTableInfo(this.props.token, this.props.ticker, e.target.name, this.state.expDate);
        }
    }

    handleExpChange(e) {
        if (this.state.expDate !== e.target.value) {
            this.setState({ expDate: e.target.value });
            this.props.getTableInfo(this.props.token, this.props.ticker, this.state.orderType, e.target.value);
        }
    }

    render() {
        let color = "color"
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        {this.props.ticker}
                    </div>
                    <div className="col-md-4">
                        {`Share Price: ${this.props.stockPrice}`}
                    </div>
                    <div className="col-md-4">
                        Expiration dates
                        <select className="custom-select" value={this.state.expDate} onChange={this.handleExpChange}>
                            { this.props.expirationDates.map(date => (
                                <option value={date}>{date}</option>
                              ))
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <button
                            className={`btn btn-${ this.state.direction === 'buy' ? '' : 'outline-' }success`}
                            id="buy"
                            type="button"
                            name="buy"
                            onClick={this.toggleDirection}
                        >
                            BUY
                        </button>
                        <button
                            className={`btn btn-${ this.state.direction === 'sell' ? '' : 'outline-' }success`}
                            id="sell"
                            type="button"
                            name="sell"
                            onClick={this.toggleDirection}
                        >
                            SELL
                        </button>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <button
                            className={`btn btn-${ this.state.orderType === 'call' ? '' : 'outline-' }success`}
                            id="call"
                            type="button"
                            name="call"
                            onClick={this.toggleType}
                        >
                            CALL
                        </button>
                        <button
                            className={`btn btn-${ this.state.orderType === 'put' ? '' : 'outline-' }success`}
                            id="put"
                            type="button"
                            name="put"
                            onClick={this.toggleType}
                        >
                            PUT
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        ticker: state.ticker,
        stockPrice: state.stockPrice,
        expirationDates: state.dates
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        getTableInfo: getTableInfo
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(StockInfo);
