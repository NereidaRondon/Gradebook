import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './Read.js'

export default function AddStudent(){

    const [add, setAdd]=useState(null);

    useEffect(()=> {
        axios.get(url).then((response)=> {
            setPost(response.data);
        });
    }, []);

    return(
        <div>
            
        </div>
    );

}