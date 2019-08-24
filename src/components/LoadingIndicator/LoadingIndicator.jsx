import React from 'react';

import './LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-eclipse">
        <div />
      </div>
    </div>
  );
}

export default LoadingIndicator;
