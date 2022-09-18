import axios from 'axios';
import {useState, useRef} from 'react';
import trash from '../images/trash.svg';
import edit from '../images/edit.svg';
import save from '../images/save.svg';

export const url='https://631c73714fa7d3264cae6ac0.mockapi.io/database/students';

export default function ReadProfiles(props){
    var letter;
    const percent = props.student.grade;
    const [newData, setNewData] = useState(false);
    const [deleteModal, setDeleteModal]=useState(false);
    const firstInput = useRef(null);
    const lastInput = useRef(null);
    const stuIdInput = useRef(null);
    const gradeInput = useRef(null);
    

    const Grade=(percent)=>{
        if ( percent===""){
            letter = 'NG';
        } else if( percent < 60 && percent >= 1 ){
            letter = 'F';
        } else if( percent < 70 ){
            letter = 'D';
        } else if (percent < 80){
            letter = 'C'; 
        } else if (percent < 90){
            letter = 'B';
        } else {
            letter = 'A';
        };
        return letter;
    }
    function DeleteModalWindow(){

        return(
            <div className='modal--delete--cont'>
                <div className='modal--delete'>
                    <h4>Are you sure you want to delete this student profile?</h4>
                    <button onClick={()=> setDeleteModal(false)}>Close</button>
                    <button onClick={()=> deletePost(props.student.id) }>Yes</button>
                </div>
            </div>
        );
    }
    function DeleteStudentBtn(id){
        setDeleteModal(true);
    }

    function deletePost(id) {        
        
        axios.delete(`${url}/${id}`)
        .then(() => {
            console.log("Post deleted!");
        })
        .then(()=>{
            setDeleteModal(false);
        });
    }
    function DeleteBtnComponent(){
        return(
            <button  className="btn--actions" onClick={()=> DeleteStudentBtn(props.student.id)}><img className='icon--actions' src={trash} alt='Delete Student'/></button>
        )
    }
    function EditBtn(){
        return(
            <>
            {!newData && (
            <button className="btn--actions" onClick={()=> EditBtnClick(props.student.id)}><img className='icon--actions' src={edit} alt='Edit Student Grade'/></button>)}

            {newData && (
            <button className='btn--actions' onClick={()=> SavePost(props.student.id)}><img className='icon--actions' src={save} alt='Save Student Grade'/></button>)}

            </>
        );
    }

    function EditBtnClick(id){
        setNewData(true);
    }
    function SavePost(id){
        const lastname = lastInput.current.value;
        const firstname = firstInput.current.value;
        const studentID = stuIdInput.current.value;
        const grade = gradeInput.current.value;
        const data = {id, lastname, firstname, studentID, grade};
        
        axios.put(`${url}/${id}`, data)
        .then(response =>(response.student))
        .catch(error =>  console.log(error))
  
        setNewData(current => !current);       
        console.log(`Profile updated!`);
        
    }   
    
    return(
        
        <tr>
            <td className="avatar"><img className='profile--pic' src={props.student.image} alt='student profile avatar' width='50px' height='50px'></img></td>

            <td>{props.student.id}</td>
            
            <td className='left--col'>
                {!newData && (props.student.lastname)}
                {newData && (
                <textarea className='text--long' ref={lastInput} defaultValue={props.student.lastname}/>)} 
            </td>

            <td className='left--col'>
                {!newData && (props.student.firstname)}
                {newData && (
                <textarea className='text--long' ref={firstInput} defaultValue={props.student.firstname}/>)} 
            </td>

            <td className='left--col'>
                {!newData && (props.student.studentID)}
                {newData && (
                <textarea className='text--med' ref={stuIdInput} defaultValue={props.student.studentID} maxLength='8'/>)} 
            </td>


            <td>{!newData && (props.student.grade)}
                {newData && (
                <textarea className='text--short' ref={gradeInput} defaultValue={props.student.grade}/>)} 
            </td>
            
            <td>{Grade(percent)}</td>
            <td> <EditBtn /> </td>
            <td>
                <div>
                    <DeleteBtnComponent />
                    {deleteModal && <DeleteModalWindow />}
                </div>
            </td>  
        </tr>
    );
} 