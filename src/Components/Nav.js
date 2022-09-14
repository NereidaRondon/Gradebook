
  const Test = require('./Test.png');
  
export default function Nav(){
  
  return(
    
    <div className='title--div'>
      <img src={Test} className="title--img" alt='Graded test paper with an A'/>
      <h1 className="page--title">Gradebook✔️</h1>
    </div> 
    
  )
}