import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IPagination {
  pageCount: number | undefined,
  defaultPage: number | undefined,
  handler: any
}

const CPagination: React.FC<IPagination> = ({ pageCount = 1, defaultPage = 1, handler }) => {
  return (
    <Stack spacing={2} sx={{ marginTop: '50px' }}>
      <Pagination
        sx={{ margin: '0 auto' }}
        count={pageCount}
        defaultPage={defaultPage}
        variant='text'
        shape="rounded"
        onChange={ (e, page) => handler(page) }
        color='primary'
      />
    </Stack>
  );
}

export default CPagination