import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import BooksBuy from './pages/BooksBuy/BooksBuy';
import Footer from '../src/components/footer/Footer';
import EnglishLearning from './pages/EnglishLearning/EnglishLearning';
import FrenchLearning from './pages/FrenchLearning/FrenchLearning';
import ItalyLearning from './pages/ItalyLearning/ItalyLearning';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import GermanLearning from './pages/GermanLearning/GermanLearning';
import ProgrammingLearning from './pages/programmingLearning/programmingLearning';
import Frontend from './pages/programmingLearning/Frontend';
import Python from './pages/programmingLearning/Python';
import Graphic from './pages/programmingLearning/Graphic';
import Icdl from './pages/programmingLearning/Icdl';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path='/' element = {<Home/>} />
     <Route path='/buy-books' element = {<BooksBuy/>} />
     <Route path='/english-learning' element = {<EnglishLearning/>} />
     <Route path='/french-learning' element = {<FrenchLearning/>} />
     <Route path='/italy-learning' element = {<ItalyLearning/>} />
     <Route path='/german-learning' element = {<GermanLearning/>} />
     <Route path='/programming-learning' element = {<ProgrammingLearning/>} />
     <Route path='/front-end' element = {<Frontend/>} />
     <Route path='/python' element = {<Python/>} />
     <Route path='/graphic-learning' element = {<Graphic/>} />
     <Route path='/icdl-learning' element = {<Icdl/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
