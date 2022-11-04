import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
            <ListItem style={{padding: '10px 0'}} key={product.name}>
                <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>

            </ListItem>
        ))}
        <listItem style={{padding: '10px 0'}}>
            <ListItemText primary="Total"/>
            <Typography varaint="subtitle1" style={{ fontWeight: 700 }}>
                {checkoutToken.live.subtotal.formatted_with_symbol}
            </Typography>
        </listItem>
      </List>  
      
    </>
  )
}

export default Review