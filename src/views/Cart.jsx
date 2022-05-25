import { Box, TableBody, Table, TableCell, TableHead, TableRow, Typography, Grid, Avatar, TextField, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import CartContext from '../context/CartContext'
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi'
import { IoTrashBin } from 'react-icons/io5'

const CartTableRow = (props) => {
    const { item } = props
    const ctx = useContext(CartContext)
    return (
        <TableRow>
            <TableCell sx={{ width: '50%', whiteSpace: 'nowrap' }}>
                <Grid container spacing={2} alignItems='center' wrap='nowrap'>
                    <Grid item>
                        <Avatar src={item.image} variant='square' />
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1'>
                            {item.name}
                        </Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                <IconButton
                    color='error'
                    onClick={() => ctx.decreaseQuantity(item.id)}
                    disabled={item.quantity === 1}
                >
                    <HiMinusCircle />
                </IconButton>
                <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', readOnly: true }}
                    size='small'
                    sx={{
                        width: 40
                    }}
                    value={item.quantity}
                />
                <IconButton
                    color='success'
                    onClick={() => ctx.increaseQuantity(item.id)}
                >
                    <HiPlusCircle />
                </IconButton>
            </TableCell>
            <TableCell align='center'>
                ${item.price}
            </TableCell>
            <TableCell align='center'>
                <IconButton 
                    color='error'
                    onClick={() => ctx.removeFromCart(item.id)}
                >
                    <IoTrashBin />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}


const Cart = () => {

    const [rows, setRows] = useState([])
    const ctx = useContext(CartContext)

    useEffect(() => {
        setRows(ctx.cart)
    }, [ctx.cart])

    return (
        <Box>
            <Box sx={{ overflowX: 'auto', minWidth: 600 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Product Info
                            </TableCell>
                            <TableCell align='center'>
                                Quantity
                            </TableCell>
                            <TableCell align='center'>
                                Single price
                            </TableCell>
                            <TableCell align='center'>
                                Remove
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 &&
                            rows.map((item, index) => (
                                <CartTableRow key={index} item={item} />
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
            <Grid container justifyContent='flex-end' spacing={3} sx={{my:2}}>
                <Grid item>
                    <Typography variant='h5'>
                        Total products: {ctx.getTotalQuantity()}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>
                        Total price: ${ctx.getTotalPrice()}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart
