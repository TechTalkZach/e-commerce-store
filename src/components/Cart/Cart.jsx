import React from 'react'
import { Container, Typography, Button, Grid  } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';


const Cart = ( { cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart } ) => {
    const classes = useStyles();
    // !=0 === !cart.line_items.lenth
    console.log(cart.line_items)
    // No need for variable here
    // const isEmpty = !cart.line_items.length;

    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () => (
      <Typography variant='subtitle1'>You have no items in your shopping cart
        <Link to="/" className={classes.link}>    START ADDING ITEMS</Link>
      </Typography>
    );

    if(!cart.line_items) return 'Loading...';

    const FilledCart = () => (
      <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4"> Subtotal : {cart.subtotal.formatted_with_symbol} </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout"  size="large" type="button" variant="contained" color="primary">Checkout </Button>
        </div>

      </div>
      </>
    );

    
    return (
     
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? EmptyCart() : FilledCart() }
    </Container>
  )
}

export default Cart