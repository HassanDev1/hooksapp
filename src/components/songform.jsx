import React,{useState} from 'react';

const SongForm = ({addSongs}) => {
    const [title, settitle] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        addSongs(title);
        settitle('')

    }
 
     
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
             <label>Add Songs </label>
             <input type='text' required value={title} onChange={(e)=>{settitle(e.target.value)}}/>
             <input type='submit' value=' Add'/>

            </form>
        </div>
     );
}
 
export default SongForm;
