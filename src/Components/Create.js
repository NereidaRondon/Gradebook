//import axios from 'axios';
//import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './Read';

export default function Create() {
    
    const [studentID, setStudentID] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [grade, setGrade] = useState('');
    const [isLoading, setIsLoading]=useState(false); 
    
    //     function addProfiles(){
    //     axios.get(url).then((response) => {
    //     setProfile(response.data);
    //     });
    // }

    const handleAdd = async()=> {
        setIsLoading(true);
        const profile={studentID, firstname, lastname, grade};

        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify(profile)    
        });    
    
            console.log('New Student Profile added! Loading removed');
            setIsLoading(false); 
            const result = await response.json();
            console.log('result is: ', JSON.stringify(result, null, 4)); 
            return result;         
    };

    return (
           
        <>
        <div className='modal--div'>
            <h3>New Student</h3>
                        
            <div className='input--container'>

                
                <div className='input box1'>
                    <input placeholder='First Name' type='text' onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                
                <div className='input box2'>
                    <input placeholder='Last Name' type='text' onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div className='input box3'>
                    <input id='id' placeholder='Student ID number' type='number' onChange={(e)=>setStudentID(e.target.value)}/>
                </div>
                <div className='input box4'>
                    <input placeholder='Grade out of 100' type='number' onChange={(e)=>setGrade(e.target.value)}/>
                </div>
                
                <div className='input box5'>
                    <button className="btn--form" type='button' onClick={ handleAdd }>Add </button>         
                </div>
        
                <div className='input box6'>
                    {isLoading && (<h4>Loading...</h4>)}
                </div> 
            </div>   
        </div>        
        </>
    );
}