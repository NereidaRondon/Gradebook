import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ReadProfiles from './ReadProfiles.js';
import {url} from './ReadProfiles';
import gear from '../images/gear-solid.svg';
import arrow from '../images/arrow.svg';
export let counter= false;

export default function Table(){
    const [profile, setProfile]= useState('');
    const [modal, setModal]=useState(false);    
    const [refresh, setRefresh]=useState(false)
    
    useEffect(() => {
        console.log('Page has rendered!');
        console.log(refresh);
        
        axios.get(url).then((response) => {
            setProfile(response.data); 
        });
        
    },[refresh]);

    if (!profile) return null;
    
    function ChangeModalState(){
        setModal(current => !current);
        setRefresh(current=> !current);
        console.log('modal action');
    }
    function Refresh(){
        console.log(`refreshed`);
        setRefresh(current=> !current);
    };
    
    function Create() {
        
        const [studentID, setStudentID] = useState('');
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [grade, setGrade] = useState('');
        const [isLoading, setIsLoading]=useState(false); 
        const clear = useRef(null);
        const clearFirst = useRef(null);
        const clearLast = useRef(null);
        const clearGrade = useRef(null);

        function HandleAdd(){
            setIsLoading(true);
            const student ={studentID, firstname, lastname, grade};
            
            axios.post(url, student)
            .then((response) => {
                console.log('New Student Profile added! Loading removed');
                console.log(response); 
                setIsLoading(false); 
                setProfile ([...profile, response.data]);   
            }, (error) => {
                console.log(error);
            }
            );    
            
            clear.current.value = '';
            clearFirst.current.value = '';
            clearLast.current.value = '';
            clearGrade.current.value = '';
            Refresh();
        };
        function CloseModal(){
            ChangeModalState();
            console.log('modal action');
        };
           
        return (
            
            <>
            <div className='modal--div'>
                <h3 className='modal--title'>Manage Student Profile</h3>
                            
                <div className='input--container'>

                    <div className='input box1'>
                        <input id='id' ref={clear} placeholder='Student ID number' type='text' maxLength={8} onChange={(e)=>setStudentID(e.target.value)} />
                    </div>
                    <div className='input box2'>
                        <input ref={clearFirst} placeholder='First Name' type='text' onChange={(e)=>setFirstname(e.target.value)}/>
                    </div>
                    
                    <div className='input box3'>
                        <input ref={clearLast} placeholder='Last Name' type='text' onChange={(e)=>setLastname(e.target.value)}/>
                    </div>
                    <div className='input box4'>
                        <input ref={clearGrade} placeholder='Grade out of 100' type='text' maxLength={3} onChange={(e)=>setGrade(e.target.value)}/>
                    </div>
                    
                    <div className='input box5'>
                        <button className="btn--form" type='button' onClick={ HandleAdd }>Add </button>         
                    </div>
                    {/* <div className='input box6'>
                        <button className="btn--form" onClick={ EditStudent }>Edit</button>
                    </div> */}
                    <div className='input box6'>
                        <button className="btn--form" onClick={ CloseModal }>Close</button>
                    </div> 
                    <div className='input box8'>
                        { isLoading && (<h4>Loading...</h4>) }
                    </div>             
                </div>   
            </div>        
            </>
        );
    }
    function Settings(){
        return(
            <div className='settings--bar'>
                <div className='nav--div'>
                   <button className='main--btn' type='button' onClick={Refresh}><img className='icon' src={arrow} alt='refresh students' title='Refresh Student List'/></button>
                </div> 
                <div className='nav--div'>
                   <button className='main--btn' type='button' onClick={ChangeModalState}> <img className='icon' src={gear} alt='manage settings' title='Manage Student'/></button>
                </div>         
            </div>
        );
    }
    function ProfileTable(){  
        const students = profile.map(data => {
    
            return(
                <ReadProfiles 
                    key={data.id}
                    student={data}                     
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
                            <th className='left--col'>Last</th>
                            <th className='left--col'>First</th>
                            <th className='left--col'>ID#</th>
                            <th>%</th>
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
            {modal && (<div className="my--modal"> <Create /> </div>)}
            <Settings />
            <ProfileTable />
            <Settings />
        </>
    );


}
