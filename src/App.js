
import './App.css';
import Apartment from './Components/Apartment/Apartment';
import Carousel from './Components/Carousel/Carousel';
import Category from './Components/Category/Category';
import Gallery from './Components/Gallery/Gallery';
import Navbar from './Components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
<>
<Navbar/>
<Carousel/>
<Category/>
<Gallery/>
<Apartment/>
</>  );
}

export default App;
