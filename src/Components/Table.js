//TABLE header component
//Profiles render
//MODAL State and button

import {useState} from 'react';
import axios from 'axios';
import Create from './ModalCreate.js';
import ReadProfiles from './ReadProfiles.js';
import {url} from './ReadProfiles'
//import Create from './ModalCreate';

export default function Table(){
    
    const [add, setAdd]=useState(false);
    const [profile, setProfile]= useState('');
 
   
        console.log('Page has rendered!');
        axios.get(url).then((response) => {
            setProfile(response.data);
        });
        console.log(profile);
    

    if (!profile) return null;
    
    function ChangeAddState(){
        setAdd(current => !current);
       
        console.log('modal action');

        const passState = () => {
            
            setAdd(current => !current);
        };


    }
    
    function ProfileTable(){  
        const students = profile.map(data => {
            
            return(
                <ReadProfiles 
                    key={data.id}
                    data={data}        
                />
            )

        })
                
        
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="avatar"></th>
                            <th>Key</th>
                            <th>Student Name</th>
                            <th>Student ID#</th>
                            <th>Percent</th>
                            <th>Grade</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
                </table>
            </div>
        );

    } 

    return(
        
        <>
            {add && (<div className="my--modal"><Create /></div>)}
            
            <div className='nav--div'>
      
                <div className='nav--1'>
                </div>
        
                <div className='nav--2'>
                </div>
        
                <div className='nav--3'>
                </div>    
    
                <div className='nav--4'>
                    {!add && (<button className='main--btn' type='button' onClick={ChangeAddState}>Manage</button>)}
                    {add && (<button className='btn--form main--btn' type='button' onClick={ChangeAddState}>Done</button>)}
                </div>
            </div>

           

            <h3>Students:</h3>              

            <div>
                <ProfileTable />
            </div>
        </>
    );


}