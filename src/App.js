import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Professional from './components/professional';
import Academic from './components/academic';
import Personal from './components/personal';
import Footer from './components/footer';

const App = () => {

  return (
    <div>
    <Header />
    <Menu />
    <Home />
    <Professional />
    <Academic />
    <Personal />
    <Footer />
    </div>
  )

}

export default App;
