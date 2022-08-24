import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import TopMenu from './components/maxmenu'
import Home from './components/home';
import Professional from './components/professional';
import Academic from './components/academic';
import Personal from './components/personal';
import Image from './components/image'
import Footer from './components/footer';

const App = () => {

  return (
    <div>
    <Header />
    <Menu />
    <TopMenu />
    <Home />
    <Professional />
    <Academic />
    <Personal />
    <Image />
    <Footer />
    </div>
  )

}

export default App;
