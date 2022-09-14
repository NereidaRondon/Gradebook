import './App.css';
import Table from './Components/Table'; 
import Nav from './Components/Nav';

export default function App() {
 
  return (
      
      <>
        
        <Nav />
           
          <section className="page">
            <Table />

            {/* <div className='btn-box-1'>
              { !view && (<button className='main--btn' onClick={ ShowAllProfiles }>View</button>) }
                  
              {view && (<button className='main--btn' onClick={ HideAllProfiles }>Hide</button>)}
            </div>
                {view && (<ReadProfiles />)} */}
          </section>

      </>
  );
}


