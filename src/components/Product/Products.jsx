import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes'},
    {id:2, name: 'Macbook', description:'Apple macbook'},
];



const Products = () => {
    <main>
        <Grid container justify ="center" spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>

            ))}

        </Grid>
    </main>
}