import {  Container, Link, Typography } from '@material-ui/core';
import * as React from 'react';


function Copyright() {
  return (
    <Typography variant="subtitle2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/wassim-miledi/">
        Wassim Miladi
      </Link>{' '}
      {2022}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Container maxWidth="sm"  style ={{
      height: '100px',
      width:"100%",
      position: 'absolute',
      left: '0',
      bottom: '0',
      margin:'0'
  }
  }>
          <Typography variant="subtitle2">
            Developed for educational purposes.
          </Typography>
          <Copyright />
        </Container>
  );
}