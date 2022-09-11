import './App.css';
import Search from './Components/Search';
//import Students from './Components/Students';
import ReadProfiles from './Components/Read'; 
//import CreateProfile from './Components/Create';

export default function App() {

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
        <h1 className="page--title">Gradebook💯✔️</h1>
            <Search />
          <section className="page">

            
            <ReadProfiles />

          </section>

      </>
  );
}


