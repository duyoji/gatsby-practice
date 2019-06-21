import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Header = props => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Web白熱Eラーニング</title>
    </Helmet>
    <h1>{props.headerText}</h1>
  </div>
)

Header.propTypes = {
  headerText: PropTypes.string.isRequired
};

export default Header;