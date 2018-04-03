import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Main extends React.Component {
    render(){
        return(
          <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button bsStyle="primary">Learn more</Button>
                    </p>
                  </Jumbotron>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
}

export default Main;
