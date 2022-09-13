import {useState, useEffect} from 'react';
import axios from 'axios';
import Create from './Create.js';
import Table from './Table.js';

export const url='https://631c73714fa7d3264cae6ac0.mockapi.io/database/student';



export default function ReadProfiles(){
    
    const [profile, setProfile]= useState('');
    const [add, setAdd]=useState(false);

    function ChangeAddState(){
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
                    <thead>
                        <tr>
                            <th className="avatar"></th>
                            <th>Key</th>
                            <th>Student Name</th>
                            <th>Student ID#</th>
                            <th>Percent</th>
                            <th>Grade</th>
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
            <div className='btn-box-2'>
                {!add && (<button className='main--btn' type='button' onClick={ChangeAddState}>Manage</button>)}
                {add && (<button className='btn--form main--btn' type='button' onClick={ChangeAddState}>Done</button>)}
            </div>
            {add && (<div className="my--modal"><Create /></div>)}

            <h3>Students:</h3>              

            <div>
                <ProfileList />
            </div>
        </>
    );


}