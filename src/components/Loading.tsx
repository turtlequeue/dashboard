import React from 'react';
import "react-router-dom";
import styled from 'styled-components'
/* https://github.com/jgthms/bulma/issues/847
 * https://cssninja.io/blog/post/simple-loader-bulma */
const Spinner = styled.div`
  ${props => props.className} {

  .loader {
  z-index: 999 !important;
  transition: opacity .3s;
  position: absolute;
  top: calc(25%);
  left: calc(50% - 2.5em);
  width: 5em;
  height: 5em;
  border-width: 0.25em;
  }

  .is-loading {
  position: relative;
  pointer-events: none;
  opacity: 0.3;
  }
  }
`

function LoaderWrapper({ ...props }) {
  const c = props.overlayLoader ? "is-loading" : "";
  const cl = props.overlayLoader ? "loader" : "";
  return <Spinner {...props}>
    <div className={c}>
      <div className={cl}></div>
      {props.children}
    </div>
  </Spinner>

}

export default LoaderWrapper;