import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DefaultLayout from '../../../physical_layout/DefaultLayout/DefaultLayout';
import Card from '../../../physical_layout/Card';

const Login = () => (
  <DefaultLayout>
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={6} mdOffset={3}>
            <Card header={<h2 className="card-title">Sign In</h2>} hr>
              <p>
                  Please sign in with a third party account
                  or with your username and password below.
              </p>
            </Card>
          </Col>
        </Row>
      </Grid>
    </div>
  </DefaultLayout>
);

export default Login;
