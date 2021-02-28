import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    desc: {
        height: 80,
        overflow: 'hidden',
    },
    price: {
        marginTop: '0.5em',
        color: '#cc561e',
        fontWeight: 'bolder',
        fontSize: '1.3em'
    }
});

export default function ImgMediaCard({ product }) {
    const { _id,
        name,
        image,
        description,
        brand,
        price,
        rating,
        numReviews } = product
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link to={`/product/${product._id}`}>
                    <CardMedia
                        component="img"
                        alt={name}
                        height="100%"
                        image={image}
                        title="Product"
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        {description}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.price}>
                        ${price}
                    </Typography>

                </CardContent>

            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    {<Rating name="read-only" value={rating} readOnly />}  {numReviews} Reviews
                </Button>

            </CardActions>
        </Card>
    );
}