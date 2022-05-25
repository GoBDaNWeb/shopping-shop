import { AppBar, Avatar, Container, Drawer, Toolbar, Typography, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import logo from '../assets/logo/logo.svg'
import Navigation from './Navigation'
import { MdMenuOpen } from 'react-icons/md'
import CartInformer from './CartInformer'

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <React.Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.5rem',
                        p: { xs: 0, md: '.5rem' }
                    }}>
                        <Avatar
                            variant='square'
                            src={logo}
                            alt='Shopping shop'
                            sx={{
                                width: { xs: 40, sm: 48, lg: 56 },
                                height: { xs: 40, sm: 48, lg: 56 }
                            }}
                        />
                        <Typography variant='h5' sx={{ fontWeight: 900, mr: 'auto' }}>
                            Shopping Shop
                        </Typography>
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            <Navigation type='toolbar' />
                        </Box>
                        <CartInformer/>
                        <IconButton
                            color='inherit'
                            size="large"
                            sx={{ display: { xs: 'block', lg: 'none' }, width: 56, height: 56 }}
                            onClick={handleOpen}
                        >
                            <MdMenuOpen />
                        </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={handleClose}>
                <Box sx={{ minWidth: 280 }}>
                    <Navigation />
                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default Header
