import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';


function LoadingBoundary({ loading, children }) {
  if (loading) {
    return <LoadingIndicator />;
  }
  return children;
}

function mapStateToProps(state) {
  const { loading } = state;
  return { loading };
}

export default connect(mapStateToProps)(LoadingBoundary);
