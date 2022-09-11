import {useState, useEffect} from 'react';
import axios from 'axios';

const url='https://631c73714fa7d3264cae6ac0.mockapi.io/database/student';

export default function ReadProfiles(){
      
    const [profile, setProfile]= useState('');

    useEffect( ()=>{
        
        axios.get(url).then((response) => {
        setProfile(response.data);
        });
        console.log(profile);
    }, []);

    function getProfiles(){
        axios.get(url).then((response) => {
        setProfile(response.data);
        });
    }
    if (!profile) return null;

    // const getData = async()=>{
    //     const response = await fetch(`${url}/1`);
    //     const data = await response.json();
    //     return data;
    // };

        //     getData()
        // .then(data=>{
        // console.log('resolved:', data)
        // JSON.stringify(data);
        
        // }).catch(err=> console.log('ERROR', err.message));    
    
        function ProfileList(){  
            const itemList = profile.map((data) => (
                <>
                <hr></hr>
                <li className="data--list">
                    {data.id}
                    <br></br>
                    {data.firstname} <span>&nbsp;</span> 
                    {data.lastname} 
                    <br></br>
                    {data.studentID}
                    <br></br>
                    <button>Edit</button>
                </li>
                </>
            ));
        
            return(
                <div>
                    <ul className="data--ul">{itemList}</ul>
                </div>
            );

    } 

    return(

        <div>
            <h2>Student Profiles</h2>              
            <ul>
                <li>Add Students</li>
                <li>Edit Student info</li>
                <li>Delete Students</li>

            </ul>
            <div>
            <button type='button' onClick={getProfiles}>View All</button>
            </div>
            <br></br>
            <div>
                <ProfileList />
            </div>
        </div>
    );


}