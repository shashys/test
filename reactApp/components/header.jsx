import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return(
          <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <h1>Shashys</h1>
                </Col>
                <Col xs={12} md={8}>
                  <h4> Menu Items </h4>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
}

export default Header;
