import check from '../images/check-solid.svg';
const Test = require('../images/Test.png');
  
export default function Nav(){
  
  return(
    
    <div className='title--div'>
      <img src={Test} className="title--img" alt='Graded test paper with an A+'/>
      <h1 className="title">Gradebook<img className='icon--title' src={check} alt='checkmark'/></h1>
    </div> 
  )
}