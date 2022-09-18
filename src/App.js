import './App.css';
import Table from './Components/Table'; 
import Nav from './Components/Nav';
import ScrollBtn from './Components/ScrollBtn';
import Footer from './Components/Footer.js';

export default function App() {
 
  return (
      
      <>
        <Nav />
          <section className="page">
            <Table />
          </section>
          <Footer />
          <ScrollBtn />
      </>
  );
}


