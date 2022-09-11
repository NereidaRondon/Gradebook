import {useState, useEffect} from 'react';
import axios from 'axios';
import Create from './Create.js';
import Table from './Table.js';

export const url='https://631c73714fa7d3264cae6ac0.mockapi.io/database/student';


export default function ReadProfiles(){
    
    const [profile, setProfile]= useState('');
    const [add, setAdd]=useState(false);

    function changeAddState(){
        setAdd(current => !current);
        console.log('modal action');
    }

    useEffect( ()=>{
        
        axios.get(url).then((response) => {
        setProfile(response.data);
        });
        console.log(profile);
    }, []);


    if (!profile) return null;
 
    
    function ProfileList(){  
        const students = profile.map(data => {
            
            return(
                <Table 
                    key={data.id}
                    data={data}        
                />
            )

        })
                
        
        return(
            <div>
                <table>
                    <tr>
                        <th></th>
                        <th>Key</th>
                        <th>Student Name</th>
                        <th>Student ID#</th>
                        <th>Percent</th>
                        <th>Grade</th>
                        <th></th>
                        <th></th>
                    </tr>
                {students}

                </table>
            </div>
        );

    } 

    return(

        <div>
            {add && (<div className="my--modal"><Create /></div>)}
            
            <h3>Student Profiles</h3>              
            <ul>
                <li>Add Students</li>
                <li>Edit Student info</li>
                <li>Delete Students</li>
            </ul>
            
            <div>
                {!add && (<button type='button' onClick={changeAddState}>New</button>)}
                {add && (<button className="btn--form" type='button' onClick={changeAddState}>Done</button>)}
            </div>

            <div>
                <ProfileList />
            </div>
        </div>
    );


}