import React from "react";

import { connect } from "react-redux";

import { searchFn } from "../../views/Search/actions";

import Card from "../../views/Search/components/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Loader from "react-loader-spinner";

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
  getSearchResults(query, currPage) {
    console.log("==> currPage: ", { currPage });
    this.props.searchFn(query, currPage);
  }

  getPages() {
    let pages = [];
    for (let i = 1; i <= this.props.totalPages && i <= 15; i++) {
      pages.push(
        <div
          id={i}
          style={{ padding: "5px", border: "1px solid" }}
          onClick={() => this.getSearchResults(this.state.query, i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  }

  render() {
    const { searchResults, isFetching } = this.props;

    // console.log("in render:--> searcResults", searchResults);
    const { query, isLoading } = this.state;

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
            onClick={
              () => this.getSearchResults(query, 1)

              //async?? proceeded in sequence?
            }
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
          {isFetching ? (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              // timeout={5000}
              style={{ margin: "180px", zIndex: "9" }}
            />
          ) : (
            searchResults.map((item, id) => (
              <Card key={id} item={item} isLoading={isLoading} />
            ))
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "40px auto",
            justifyContent: "center"
          }}
        >
          {searchResults ? this.getPages() : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currPage: state.searchReducer.currPage,
    isFetching: state.searchReducer.isFetching,
    searchResults: state.searchReducer.searchResults,
    totalPages: state.searchReducer.totalPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFn: (query, currPage) => dispatch(searchFn(query, currPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
