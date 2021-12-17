import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen  from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <div >
      <Router>

      
      <Header/>
      <main className="py-3">
        <Container>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={ProductScreen} />
        </Container>
        
      </main>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
