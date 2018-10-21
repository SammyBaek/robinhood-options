import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "loss",
            stopPrice: 10.00,
            numContracts: 1,
            limitPrice: 10.00
        };

        this.submitOrder = this.submitOrder.bind(this);
        this.toggleType = this.toggleType.bind(this);
        this.handleGeneral = this.handleGeneral.bind(this);
    }

    changeColor(e) {
        const grey = '#666666';
        let color = '#FF6340';
        const put = document.getElementById('put').style.background;
        if (put == "" || put == 'rgb(102, 102, 102)') {
            color = '#21CE99';
        }
        if (e.target.name == "limit") {
            e.target.style.background = color;
            document.getElementById('loss').style.background = grey;
        } else {
            e.target.style.background = color;
            document.getElementById('limit').style.background = grey;
        }
    }



    submitOrder(e) {

    }

    handleGeneral(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleType(e) {
        this.setState({ type: e.target.name });
        this.changeColor(e);
    }

    render() {
        let color = "color"
        const limitPrice = this.state.type === 'loss' ? '' : (
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Limit Price</label>
                <div className="col-sm-8">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="limitPrice"
                        value={this.state.limitPrice}
                        onChange={this.handleGeneral}
                    />
                </div>
            </div>
        );
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <button
                            className={`btn btn-${ this.state.type === 'loss' ? '' : 'outline-' }success`}
                            id="loss"
                            type="button"
                            name="loss"
                            onClick={this.toggleType}
                        >
                            Stop Loss
                        </button>
                        <button
                            className={`btn btn-${ this.state.type === 'limit' ? '' : 'outline-' }success`}
                            id="limit"
                            type="button"
                            name="limit"
                            onClick={this.toggleType}
                        >
                            Stop Limit
                        </button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Stop Price</label>
                    <div className="col-sm-8">
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            name="stopPrice"
                            value={this.state.stopPrice}
                            onChange={this.handleGeneral}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"># Contracts</label>
                    <div className="col-sm-8">
                        <input
                            type="number"
                            className="form-control"
                            name="numContracts"
                            value={this.state.numContracts}
                            onChange={this.handleGeneral}
                        />
                    </div>
                </div>
                { limitPrice }
                <button className="btn btn-success" id="submit" name="submit" type="submit" onClick={this.submitOrder}>Submit Order!</button>
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
)(Order);
