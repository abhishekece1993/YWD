import React from 'react';
import Header from '../../components/layout/header';
import { Footer } from '../../components/layout/footer';
import { Main } from '../../components/maincomponent/body';
import Grid from '@material-ui/core/Grid';

export function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Main /> */}
      <Grid container><Grid item xs={12}> <Main /></Grid></Grid>
      <Footer />
    </React.Fragment>


  )




}