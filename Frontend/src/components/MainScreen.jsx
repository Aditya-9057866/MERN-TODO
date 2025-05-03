import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className='mainBack'>
      <Container>
        <Row>
          <div className='page'>
            {title && (
              <>
                <h1 className='heading'>{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

MainScreen.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MainScreen;