import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default class IconButtons extends React.Component {
  render() {
    return (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={this.props.clicouCarrinho}>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Stack>
  );
  }
  
}