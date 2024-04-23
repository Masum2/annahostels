
import './App.css';
import Apartment from './Components/Apartment/Apartment';
import Carousel from './Components/Carousel/Carousel';
import Category from './Components/Category/Category';
import Gallery from './Components/Gallery/Gallery';
import Navbar from './Components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import TestiMonialMain from './Components/TestiMonialMain';
import Gallery2 from './Components/Gallery2/Gallery2';

function App() {
  return (
<>
<Navbar/>
<Carousel/>
<Category/>
<Gallery/>
<Apartment/>
<TestiMonialMain/>
<Gallery2/>
</>  );
}

export default App;
