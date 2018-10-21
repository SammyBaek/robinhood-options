import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StockInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: 'buy',
            orderType: 'call',
        };

        this.toggleDirection = this.toggleDirection.bind(this);
        this.toggleType = this.toggleType.bind(this);
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
        this.setState({ direction: e.target.name });
        this.changeColorDirection(e);
    }

    toggleType(e) {
        this.setState({ orderType: e.target.name });
        this.changeColorType(e);
    }

    render() {
        let color = "color"
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        $AAPL
                    </div>
                    <div className="col-md-4">
                        Share Price: $100
                    </div>
                    <div className="col-md-4">
                        Expiration Date
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
