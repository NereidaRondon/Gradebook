import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { url } from './ReadProfiles';


export default function Create() {
    
    const [studentID, setStudentID] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [grade, setGrade] = useState('');
    const [isLoading, setIsLoading]=useState(false); 
    const clear = useRef(null);
    const clearFirst = useRef(null);
    const clearLast = useRef(null);
    const clearGrade = useRef(null);

    function HandleAdd(){
        setIsLoading(true);
        const student ={studentID, firstname, lastname, grade};

        axios.post(url, student)
            .then((response) => {
                console.log('New Student Profile added! Loading removed');
                console.log(response);
            }, (error) => {
                console.log(error);
            });
            
            
            clear.current.value = '';
            clearFirst.current.value = '';
            clearLast.current.value = '';
            clearGrade.current.value = '';
            setIsLoading(false); 
    };

    return (
           
        <>
        <div className='modal--div'>
            <h4 className='modal--title'>Manage Student Profile</h4>
                        
            <div className='input--container'>

                
                <div className='input box1'>
                    <input id='id' ref={clear} placeholder='Student ID number' type='number' onChange={(e)=>setStudentID(e.target.value)}/>
                </div>
                <div className='input box2'>
                    <input ref={clearFirst} placeholder='First Name' type='text' onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                
                <div className='input box3'>
                    <input ref={clearLast} placeholder='Last Name' type='text' onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div className='input box4'>
                    <input ref={clearGrade} placeholder='Grade out of 100' type='number' onChange={(e)=>setGrade(e.target.value)}/>
                </div>
                
                <div className='input box5'>
                    <button className="btn--form" type='button' onClick={ HandleAdd }>Add </button>         
                </div>
                {/* <div className='input box6'>
                    <button className="btn--form" onClick=''>Edit</button>
                </div>
                <div className='input box7'>
                    <button className="btn--form" onClick=''>Delete</button>
                </div> */}
                <div className='input box8'>
                    {isLoading && (<h4>Loading...</h4>)}
                </div> 

        
            </div>   
        </div>        
        </>
    );
}