import React from "react";

import { connect } from "react-redux";

import { searchFn } from "../../views/Search/actions";

import Card from "../../views/Search/components/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Search extends React.Component {
  state = {
    query: " "
  };

  handleChange(value) {
    this.setState(prevState => ({
      ...prevState,
      query: value
    }));
  }
  getSearchResults(query) {
    this.props.searchFn(query);
  }

  render() {
    const { searchResults } = this.props;

    // console.log("in render:--> searcResults", searchResults);
    // const { query } = this.state;

    return (
      <div style={{ margin: "40px auto", padding: "0 30px" }}>
        <div
          style={{
            margin: "50px auto",
            width: "50%",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <TextField
            id="standard-search"
            onChange={e => this.handleChange(e.target.value)}
            label="Search field"
            type="search"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={e => this.getSearchResults(this.state.query)}
          >
            Search
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {searchResults.map((item, id) => (
            <Card key={id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchReducer.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFn: query => dispatch(searchFn(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
