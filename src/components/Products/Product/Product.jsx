import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

// Instead of using props, we DESTRUCTURE product using props as to not repeat code
const Product = ({ product, onAddToCart }) => {
    // Calling styles like a hook
    const classes = useStyles();

    const handleAddToCart = () => onAddToCart(product.id, 1);


  return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image?.url} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to cart' onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
 
            </CardActions>

        </Card>    
  );
};

export default Product