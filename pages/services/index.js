import Layout from '@/components/Layout';
import { Card, CardActionArea, Grid, Paper, Typography } from '@mui/material';
import React, { createRef } from 'react';

export default function Services() {
  const containerRef = createRef();

  const getRefChild = () => containerRef.current;

  return (
    <>
      <Layout active="services">
        <Grid
          container
          direction={'column'}
          spacing={10}
          sx={{ marginTop: '1rem' }}
        >
          <Grid item>
            
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
