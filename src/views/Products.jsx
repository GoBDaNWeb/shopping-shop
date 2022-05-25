import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

import {getSorted} from '../services/product.services'

const Products = () => {
    const params = useParams()
    const slug = params.slug || 'all'

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('default')

    useEffect(() => {
        setProducts(getSorted(sort, slug))
    }, [slug, sort])

    const handleSortSelect = (e) => {
        setSort(e.target.value)
        setProducts(getSorted(e.target.value, slug)) 
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h3'>
                    {slug}
                </Typography>
                <FormControl sx={{width: 300}}>
                    <InputLabel id='sort-type-label'>Sort by</InputLabel>
                    <Select
                        labelId='sort-type-label'
                        id='sort-type'
                        label='Sort By'
                        value={sort}
                        onChange={handleSortSelect}
                    >
                        <MenuItem value='default'>Default</MenuItem>
                        <MenuItem value='price_asc'>Price Ascending</MenuItem>
                        <MenuItem value='price_desc'>Price Descending</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {products.length > 0 && 
                products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))
            }

        </Grid>
    )
}

export default Products
