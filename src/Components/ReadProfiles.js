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
    
    // const element = document.querySelector('#');
        
    // axios.put(`${url}/${id}`)
    // .then(response => element.innerHTML = response.data.updatedAt )
    // .catch(error => {
    //     element.parentElement.innerHTML = `Error: ${error.message}`;
    //     console.error('There was an error!', error);
    // });


    //         axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    //         method: 'PUT',
    //         data: {
    //             id: 1,
    //             title: 'We are learning Axios Put Request',
    //             body: 'Learning axios is easy',
    //         },
    //         })
    //         .then(res => console.log(res.data))
    //         .catch(err =>  console.log(err))





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