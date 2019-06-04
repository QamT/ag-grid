import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Helmet } from 'react-helmet';

import Grid from 'components/Grid';

const HomePage = ({ columnDefs, rowData }) => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="ag-grid crud app home page" />
    </Helmet>
    <Grid columns={columnDefs} rows={rowData} />
  </>
);

HomePage.propTypes = {
  columnDefs: arrayOf(object),
  rowData: arrayOf(object)
}

export default HomePage;
