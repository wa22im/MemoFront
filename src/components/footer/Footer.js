import {  Container, Link, Typography } from '@material-ui/core';
import * as React from 'react';


function Copyright() {
  return (
    <Typography variant="subtitle2" color="textSecondary">
      {'Copyright © '}
      <Link color="primary" href="https://www.linkedin.com/in/wassim-miledi/">
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
  
      position: 'relative',
      left: '0',
      bottom: '0',
      marginTop:'30vh'
  }
  }>
          <Typography variant="subtitle2">
            Developed for educational purposes.
          </Typography>
          <Copyright />
        </Container>
  );
}