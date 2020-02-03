import React from "react";

import { connect } from "react-redux";

import { searchFn, handleQueryChange } from "../../views/Search/actions";

import Card from "../../views/Search/components/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Loader from "react-loader-spinner";

import FilterBox from "../../views/Search/components/FilterBox/index";

// import SearchBar from "../../views/Search/components/";

class Search extends React.Component {
  getPages() {
    let pages = [];
    for (let i = 1; i <= this.props.totalPages && i <= 10; i++) {
      pages.push(
        <div
          id={i}
          style={{
            padding: "5px",
            border: "1px solid",
            margin: "5px",
            maxWidth: "15px",
            cursor: "pointer"
          }}
          onClick={() => this.props.searchFn(this.props.query, i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  }

  render() {
    const { query, searchResults, isFetching } = this.props;
    // console.log({
    //   query: query,
    //   searchresults: searchResults,
    //   isFetching: isFetching
    // });
    return (
      <div
        style={{
          margin: "40px auto",
          padding: "0 30px",
          display: "flex",
          flexDirection: "column"
        }}
      >
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
            onChange={e => this.props.handleQueryChange(e.target.value)}
            label="Search field"
            type="search"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.searchFn(query, 1)}
          >
            Search
          </Button>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
          <div style={{ width: "20%", margin: "40px auto" }}>
            <FilterBox />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              margin: "auto"
            }}
          >
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
                  style={{ margin: "180px", zIndex: "9" }}
                />
              ) : (
                searchResults.map((item, id) => <Card key={id} item={item} />)
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.searchReducer.query,
    currPage: state.searchReducer.currPage,
    isFetching: state.searchReducer.isFetching,
    searchResults: state.searchReducer.searchResults,
    totalPages: state.searchReducer.totalPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleQueryChange: value => dispatch(handleQueryChange(value)),
    searchFn: (query, currPage) => dispatch(searchFn(query, currPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
