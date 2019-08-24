import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';


function LoadingBoundary({ loading, children }) {
  const view = loading ? <LoadingIndicator /> : children;
  return view;
}

function mapStateToProps(state) {
  const { fetching: { loading } } = state;
  return { loading };
}

export default connect(mapStateToProps)(LoadingBoundary);
