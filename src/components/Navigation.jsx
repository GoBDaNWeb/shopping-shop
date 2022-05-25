import { Box, List, ListItem, ListItemIcon, ListItemText,Avatar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiHomeSmile2Fill, RiCameraFill, RiTimeFill, RiHeadphoneFill } from 'react-icons/ri'
import logo from '../assets/logo/logo.svg'
import theme from '../theme'

const Navigation = (props) => {
    const { type } = props
    return (
        <Box sx={{
            color: type === 'toolbar' ? '#fff' : theme.palette.primary.main
        }}>

            {type !== 'toolbar' && (
                <Box sx={{
                    display: 'flex',
                    gap: theme.spacing(1),
                    alignItems: 'center',
                    p: type === 'toolbar' ? theme.spacing(0) : theme.spacing(3)
                }}>
                    <Avatar
                        variant='square'
                        src={logo}
                        alt='Shopping shop'
                    />
                    <Typography variant='h6' sx={{fontWeight: 900, color: theme.palette.secondary.main}}>
                        Shopping Shop
                    </Typography>
                </Box>
            )}

            <List component='div' sx={{
                display: 'flex',
                flexDirection: type === 'toolbar' ? 'row' : 'column',
            }}>
                <ListItem button component={NavLink} to='/' className='nav-link'>
                    <ListItemIcon sx={{minWidth: 'auto', mr: theme.spacing(1), color: 'inherit'}}>
                        <RiHomeSmile2Fill size='1.5rem'/>
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button component={NavLink} to='/products/camera' className='nav-link'>
                    <ListItemIcon sx={{minWidth: 'auto', mr: theme.spacing(1), color: 'inherit'}}>
                        <RiCameraFill size='1.5rem'/>
                    </ListItemIcon>
                    <ListItemText primary='Cameras' />
                </ListItem>
                <ListItem button component={NavLink} to='/products/watch' className='nav-link'>
                    <ListItemIcon sx={{minWidth: 'auto', mr: theme.spacing(1), color: 'inherit'}}>
                        <RiTimeFill size='1.5rem'/>
                    </ListItemIcon>
                    <ListItemText primary='Watch' />
                </ListItem>
                <ListItem button component={NavLink} to='/products/headphones' className='nav-link'>
                    <ListItemIcon sx={{minWidth: 'auto', mr: theme.spacing(1), color: 'inherit'}}>
                        <RiHeadphoneFill size='1.5rem'/>
                    </ListItemIcon>
                    <ListItemText primary='Headphones' />
                </ListItem>
            </List>
        </Box>
    )
}

export default Navigation
