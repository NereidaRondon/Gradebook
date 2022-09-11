import './App.css';
import Students from './Components/Students';
import ListData1 from './Components/ListData1'; 
import Search from './Components/Search';
import CreateProfile from './Components/Create';

export default function App() {

  const profile = ListData1.map(student =>{
      return(
        <Students
          key={student.id}
          // student={student}
          lastname={student.lastname}
          firstname={student.firstname}
          studentID={student.studentID}
        />
      )
  });

  return (
      
      <>
        <h1>Gradebook💯✔️</h1>
        
        <Search />
        <CreateProfile />
        
        <section className="card--container">
          {profile}
        </section>

      </>
  );
}


