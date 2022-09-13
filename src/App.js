import './App.css';
import ReadProfiles from './Components/Read'; 
import {useState} from 'react';


const Test = require('./Test.png');
export default function App() {
  const [view, setView]=useState(false);

  function ShowAllProfiles(){
    setView(true);
    console.log('show student list');
  }
  function HideAllProfiles(){
    setView(false);
    console.log('hide student list');
  }
  // const profile = ListData1.map(student =>{
  //     return(
  //       <Students
  //         key={student.id}
  //         // student={student}
  //         lastname={student.lastname}
  //         firstname={student.firstname}
  //         studentID={student.studentID}
  //       />
  //     )
  // });

  return (
      
      <>
        <div className='title--div'>
          <img src={Test} className="title--img" alt='Graded test paper with an A'/>
          <h1 className="page--title">Gradebook✔️</h1>
        </div>
           
          <section className="page">
            <div className='btn-box-1'>
              { !view && (<button className='main--btn' onClick={ ShowAllProfiles }>View</button>) }
                  
              {view && (<button className='main--btn' onClick={ HideAllProfiles }>Hide</button>)}
            </div>
                {view && (<ReadProfiles />)}
          </section>

      </>
  );
}


