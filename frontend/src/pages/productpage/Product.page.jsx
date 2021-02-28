import React, { useState, useEffect } from 'react'
import products from '../../Products'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { typography, height } from '@material-ui/system';
import axios from 'axios'

const useStyles = makeStyles({
    productMain: {
        marginTop: '2em'

    },
    productcontainer: {
        marginTop: '1em'

    },
    proreview: {
        marginLeft: '1em'
    },
    descrip: {
        fontSize: '1.1em'
    },
    price: {
        color: '#cc561e',
        fontWeight: 'bolder',
        fontSize: '1.2em'
    },
    status: {
        color: '#000',
        fontWeight: 'bolder',
        fontSize: '1.2em'
    },
    addcart: {
        border: '1px solid #e3e3e3',
        marginLeft: '0.5em'
    },
    cartbutton: {
        backgroundColor: '#000',
        color: '#fff',
        height: '3.5em',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#fff',
            color: '#000',
        }
    },


});

function ProductPage({ match }) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()

    }, [])

    const classes = useStyles();

    const { _id,
        name,
        image,
        description,
        brand,
        price,
        rating,
        numReviews,
        countInStock } = product

    return (
        <React.Fragment >
            <CssBaseline />
            <Container className={classes.productMain} >
                <Grid container direction='column'>
                    <Grid item>
                        <Button color="primary" variant='outlined' component={Link} to='/'>Go Back</Button>
                    </Grid>
                    <Grid container item direction='row' spacing={4} className={classes.productcontainer}>
                        <Grid item md={6} sm={12}>{
                            <img src={image} alt={name} style={{ width: '95%' }} />
                        } </Grid>
                        <Grid item md={3} sm={12} >

                            <Grid container direction='column' spacing={3}>
                                <Grid item>
                                    <h1>{name}</h1>

                                </Grid>
                                <Divider />
                                <Grid item>
                                    <Grid container alignItems='center'>
                                        <Grid item>{<Rating name="read-only" value={rating} readOnly />}</Grid>
                                        <Grid item className={classes.proreview}> {numReviews} Reviews</Grid>
                                    </Grid>

                                </Grid>
                                <Divider />
                                <Grid item className={classes.price}>
                                    Price : ${price}
                                </Grid>
                                <Divider />
                                <Grid item>
                                    <typography className={classes.descrip}>{description}</typography>
                                </Grid>

                            </Grid>


                        </Grid>
                        <Grid item md={3} sm={12} >
                            <Grid container direction='column' spacing={4} className={classes.addcart}>
                                <Grid item>
                                    <Grid item className={classes.price}>
                                        Price : ${price}
                                    </Grid></Grid>
                                <Divider />
                                <Grid item>
                                    <Grid container className={classes.status}>
                                        <Grid item>Status :</Grid>
                                        <Grid item style={{ marginLeft: '0.5em' }}>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Grid>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item align='center'>
                                    <Button variant="contained" color='primary' className={classes.cartbutton} disabled={!countInStock > 0} >ADD TO CART</Button>
                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

            </Container>
        </React.Fragment>
    )
}

export default ProductPage

