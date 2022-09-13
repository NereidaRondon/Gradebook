import { url } from './Read';
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function Table(props){
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

    function updatePost(id) {
        console.log('delete item');
        axios
        .put(`${url}/`+id)
        .then(() => {
            
            console.log(id);
            console.log(`${url}/`+id);
            console.log("Post updated!");
            //setPost(null)
        });
    }
    function deletePost(id) {
        console.log('delete item');
        axios
        .delete(`${url}/`+id)
        .then(() => {
            console.log("Post deleted!");
            //setPost(null)
        });
    }

    


    return(
        
        <tr>
            <td className="avatar"><img className='profile--pic' src={props.data.image} alt='student profile pictuire' width='50px' height='50px'></img></td>
            <td>{props.data.id}</td>
            <td>{props.data.firstname}<span>&nbsp;</span>{props.data.lastname}</td>
            <td>{props.data.studentID}</td>
            <td>{props.data.grade}</td>
            <td>{Grade(percent)}</td>
        </tr>
    );
} 