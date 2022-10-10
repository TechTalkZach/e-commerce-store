import React from 'react'
import { Container, Typography, Button, Grid  } from '@material-ui/core';


const Cart = () => {
  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart