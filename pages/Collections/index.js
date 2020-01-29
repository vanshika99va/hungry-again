import React from "react";
import { connect } from "react-redux";

import { getCollections } from "../../views/Collections/actions";

import CollectionsCard from "../../views/Collections/components/CollectionsCard/index";

class Collections extends React.Component {
  componentDidMount() {
    this.props.getCollections(4);
  }

  render() {
    const { collections = [] } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {collections.map((item, id) => (
          <CollectionsCard key={id} item={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    collections: state.collectionsReducer.collections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCollections: count => dispatch(getCollections(count))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
