import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultFooter extends Component {


   
  
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment>
        <span><a href="https://www.facebook.com/ComunidadCristianaArbolDeVida/" target="_blank">Albor de Vida</a> &copy; 2018 FHFSoft.</span>
        <span className="ml-auto">Powered by <a href={ `#/users/${44}`}>FHFSoft</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;