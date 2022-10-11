import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia  } from '@material-ui/core';

const CartItem = () => {
    const classes = useStyles();


  return (
   <Card>
    <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
    <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line.total.formatted_with_symbol}</Typography>
    </CardContent>
    <CardActions>
        <div className={classes.buttons}>
            <Button type="button" size="small">-</Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Remove</Button>
    </CardActions>
    
   </Card>
  )
}

export default CartItem