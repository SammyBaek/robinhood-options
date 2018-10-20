import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StockInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: 'buy',
            orderType: 'put'
        };

        this.toggleDirection = this.toggleDirection.bind(this);
        this.toggleType = this.toggleType.bind(this);
    }

    toggleDirection(e) {
        this.setState({ direction: e.target.name });
    }

    toggleType(e) {
        this.setState({ orderType: e.target.name });
    }

    render() {
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
                            type="button"
                            name="buy"
                            onClick={this.toggleDirection}
                        >
                            BUY
                        </button>
                        <button
                            className={`btn btn-${ this.state.direction === 'sell' ? '' : 'outline-' }success`}
                            type="button"
                            name="sell"
                            onClick={this.toggleDirection}
                        >
                            SELL
                        </button>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <button
                            className={`btn btn-${ this.state.orderType === 'put' ? '' : 'outline-' }success`}
                            type="button"
                            name="put"
                            onClick={this.toggleType}
                        >
                            PUT
                        </button>
                        <button
                            className={`btn btn-${ this.state.orderType === 'call' ? '' : 'outline-' }success`}
                            type="button"
                            name="call"
                            onClick={this.toggleType}
                        >
                            CALL
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
