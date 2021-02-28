import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from '../../components/Productcard.component'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    mainpage: {
        padding: '2em'
    }
});

function HomePage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/api/products/')
            setProducts(data)
        }
        fetchProducts()

    }, [])

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.mainpage}>
                <h1>Latest Products</h1>
                <Grid container spacing={3}>
                    {products.map(product => (
                        <Grid item lg={3}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}

                </Grid>
            </Grid>

        </ React.Fragment>
    )
}

export default HomePage
