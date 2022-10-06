import React from 'react'
import { Card, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = () => {
  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={Product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {Product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {Product.name}
                    </Typography>

                </div>
            </CardContent>

        </Card>
        
    </div>
  )
}

export default Product