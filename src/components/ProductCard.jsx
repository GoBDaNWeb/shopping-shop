import React, { useContext } from 'react'
import { Card, Grid, CardActions, CardContent, CardMedia, Button, Typography, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NavLink } from 'react-router-dom'
import theme from '../theme'
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md'
import CartContext from '../context/CartContext'

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flexGrow: 1
    },
    price: {
        lineHeight: '1em'
    },
    productLink: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        fontWeight: '700'
    }
})

const ProductCard = (props) => {
    const classes = useStyles()

    const { product } = props

    const ctx = useContext(CartContext)

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardMedia
                    component='img'
                    height='240'
                    image={product.image}
                />
                <CardContent className={classes.content}>
                    <Typography
                        variant='h6'
                        component={NavLink}
                        to={`/product/${product.slug}`}
                        className={classes.productLink}
                    >
                        {product.name}
                    </Typography>
                    {product.description && (
                        <Typography variant='body2' color='text.secondary'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor.
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'space-between',
                    p: theme.spacing(2),
                    pt: theme.spacing(0)
                }}>
                    <ListItemText
                        primary={<Typography className={classes.price} variant='h6'>${product.price}</Typography>}
                        secondary={product.old_price && (<s>${product.old_price}</s>)}
                    />
                    {!ctx.isInCart(product.id) ?
                        <Button
                            variant='contained'
                            color='primary'
                            sx={{
                                p: theme.spacing(2),
                                minWidth: 'auto',
                                fontSize: 20,
                                borderRadius: 100
                            }}
                            onClick={() => ctx.addToCart(product)}
                        >
                            <MdOutlineAddShoppingCart />
                        </Button> :
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{
                                p: theme.spacing(2),
                                minWidth: 'auto',
                                fontSize: 20,
                                borderRadius: 100
                            }}
                            onClick={() => ctx.removeFromCart(product.id)}
                        >
                            <MdOutlineRemoveShoppingCart />
                        </Button>
                    }


                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard
