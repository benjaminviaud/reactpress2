import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { GridContainer, Grid, Cell } from 'react-foundation';

class About extends Component {
  render() {
    return (
      <Layout>
        <GridContainer>
          <Grid>
            <Cell large={12}>
              <h1 className="m-t-l">About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                debitis voluptate soluta doloribus at dolores dolorem harum sunt
                omnis quas hic, cumque magnam aperiam nesciunt laboriosam
                deserunt atque veritatis.
              </p>
            </Cell>
          </Grid>
        </GridContainer>
      </Layout>
    );
  }
}

export default About;
