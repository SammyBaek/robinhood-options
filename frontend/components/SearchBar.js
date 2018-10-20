import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGeneral = this.handleGeneral.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.searchTicker()

        this.setState({ ticker: '' });
    }

    handleGeneral(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input
                        className="form-control form-control-sm mr-3 w-75"
                        type="text"
                        placeholder="AAPL"
                        aria-label="Search"
                        name="ticker"
                        value={this.state.ticker}
                        onChange={this.handleGeneral}
                        required
                    />
                    <button
                        id="search"
                        className="btn btn-success"
                        type="submit"
                    >
                    Search
                    </button>
                </form>
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
