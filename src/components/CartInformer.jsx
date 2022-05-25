import React, { useContext, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { IconButton, Badge, Menu, MenuItem, Box, Typography, Divider, Button } from '@mui/material'
import CartContext from '../context/CartContext'
import { NavLink } from 'react-router-dom'

const notificationsLabel = (count) => {
    if (count === 0) {
        return 'the cart is empty';
    }
    if (count > 99) {
        return 'more than 99 products in cart';
    }
    return `${count} products`;
}

const CartInformer = () => {

    const ctx = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleAnchorEl = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <IconButton
                aria-label={notificationsLabel(ctx.getTotalQuantity())}
                color={ctx.getTotalQuantity() > 0 ? 'inherit' : 'default'}
                size='large'
                sx={{
                    ml: { xs: 0, lg: 1 }
                }}
                onClick={handleAnchorEl}
            >
                <Badge badgeContent={ctx.getTotalQuantity()} color="secondary">
                    <MdShoppingCart />
                </Badge>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    transform: { xl: 'translateX(-100px)' }
                }}
            >
                {ctx.cart.length > 0 &&
                    ctx.cart.map((item, index) => (
                        <MenuItem key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography>
                                    {item.name}
                                </Typography>
                                <Typography>
                                    {item.quantity}
                                    &times;
                                    ${item.price}
                                </Typography>
                            </Box>

                        </MenuItem>
                    ))
                }
                {
                    ctx.cart.length > 0 ?
                        (
                            <Box>
                                <Divider />
                                <MenuItem
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        gap: 2,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant='h6'>
                                        {ctx.getTotalQuantity()} products
                                    </Typography>
                                    <Typography variant='h6'>
                                        ${ctx.getTotalPrice()}
                                    </Typography>
                                </MenuItem>
                                <Box sx={{ p: 2 }}>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        component={NavLink}
                                        to='/cart'
                                        onClick={handleClose}
                                    >
                                        Go To Cart
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ p: 2 }}>
                                <Typography variant='h6'>
                                    Cart is empty
                                </Typography>
                            </Box>
                        )
                }
            </Menu>
        </React.Fragment>
    )
}

export default CartInformer
