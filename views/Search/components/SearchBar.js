import React from "react ";

const SearchBar = () => (
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
);

export default SearchBar;
