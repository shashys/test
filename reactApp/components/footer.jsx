import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';

class Footer extends React.Component {
    render(){
        return(
            <div>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <span> @Shashys.com </span>
                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }
}

export default Footer;
