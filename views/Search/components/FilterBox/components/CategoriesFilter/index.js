import React, { useEffect } from "react";
import { getCategories, handleChecked, searchFn } from "../../../../actions";
import { connect } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

const CategoriesFilter = props => {
  useEffect(() => {
    props.getCategories();
  }, []);

  const handleChange = (id, isChecked) => {
    props.handleChecked(id);
    console.log(" *** isChecked in handle Change: ", isChecked);
    console.log("id:", id);
    props.searchFn(props.query, props.currPage);
  };

  // console.log("--------------- cat Results", props.categoriesResults);
  // console.log("====> INSIDE RETURN OF CAT FILTERS");
  return (
    <div>
      <div> CATEGORIES </div>
      <div>
        <FormGroup>
          {props.categoriesResults.length > 0 &&
            props.categoriesResults.map((item, id) => {
              return (
                <FormControlLabel
                  key={id}
                  control={
                    <Checkbox
                      checked={item.isChecked}
                      onChange={e => handleChange(item.id, item.isChecked)}
                      value={item.name}
                    />
                  }
                  label={item.name}
                />
              );
            })}
        </FormGroup>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    categoriesResults: state.searchReducer.categoriesResults,
    query: state.searchReducer.query,
    currPage: state.searchReducer.currPages
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    handleChecked: id => dispatch(handleChecked(id)),
    searchFn: (query, currPage) => dispatch(searchFn(query, currPage))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFilter);
