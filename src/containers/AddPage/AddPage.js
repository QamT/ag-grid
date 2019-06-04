import React from 'react';
import { func } from 'prop-types';
import { Helmet } from 'react-helmet';

import Form from 'components/Form';

const AddPage = ({ addData }) => (
  <>
    <Helmet>
      <title>Add Page</title>
      <meta name="description" content="ag-grid crud app add page" />
    </Helmet>
    <Form addData={addData} />
  </>
);

AddPage.propTypes = {
  addData: func.isRequired
}

export default AddPage;
