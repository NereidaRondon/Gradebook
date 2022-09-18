import {useState} from 'react';
import chevron from '../images/chevron.svg';

export default function ScrollBtn(){

    const [scroll, setScroll]= useState(false);

    const toggleScroll=()=>{
        const length= document.documentElement.scrollTop;
        if(length >300){
            setScroll(true)
        } else {
            setScroll(false);
        }
    }   

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleScroll);

    return(
        <button className='scroll' onClick={scrollUp} style={{display: scroll ? 'inline' : 'none'}}><img className='scroll--img' src={chevron} alt='scroll up carrot'/></button>
    )


}