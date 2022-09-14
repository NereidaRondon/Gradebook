import axios from 'axios';
import {useState, useEffect} from 'react';
export const url='https://631c73714fa7d3264cae6ac0.mockapi.io/database/students';

export default function ReadProfiles(props){
    let percent = props.data.grade;
    var letter;

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
        } else if (percent > 89){
            letter = 'A';
        } else{
            letter = 'NG';
        };
        return letter;
    }


    // const [profile, setProfile]= useState('');
   
    // useEffect( () => {
        
    //     axios.get(url).then((response) => {
    //         setProfile(response.data);
    //     });
    //     console.log(profile);
    // }, [profile]);

    // if (!profile) return null;


    function deletePost(id) {
        console.log('delete item');
        
        axios
        .delete(`${url}/${id}`)
        .then(() => {
            console.log("Post deleted!");
        });
    }

    function EditPost(id){
        console.log(`Profile updated!`);
    }
    

    return(
        
        <tr>
            <td className="avatar"><img className='profile--pic' src={props.data.image} alt='student profile pictuire' width='50px' height='50px'></img></td>

            <td>{props.data.id}</td>
            <td>{props.data.firstname}<span>&nbsp;</span>{props.data.lastname}</td>
            <td>{props.data.studentID}</td>
            <td>{props.data.grade}</td>
            <td>{Grade(percent)}</td>
            
            <td>
                <div>
                    <button className="btn--action btn btn-color1" onClick={EditPost}>Edit</button>
                </div>
            </td>
            
            <td>
                <div>
                    <button  className="btn--action btn btn-color2" onClick={()=>deletePost(props.data.id)}>Delete</button>
                </div>
            </td>  
        </tr>
    );
} 