
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage/Home.page'
import ProductPage from './pages/productpage/Product.page'
const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '80vh',
    // color: '#ffff'

  }
}));

function App() {
  const classes = useStyles();
  return (

    <Router >
      <Header />
      <div className={classes.main}>
        <Route path='/' component={HomePage} exact />
        <Route path='/product/:id' component={ProductPage} exact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
