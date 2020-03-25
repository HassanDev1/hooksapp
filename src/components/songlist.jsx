import React, { useState } from 'react';
import SongForm from './songform';
import { v4 as uuidv4 } from 'uuid';

const SongList = () => {

    const [songs,setSongs] = useState([
        {id:1,title:"Sing With Me"},
        {id:2,title:"Freak Out!"},
        {id:3,title:"last Dance"},

    ])
    const addSongs=(title)=>{
        setSongs([...songs,{title,id:uuidv4()}])
    }
   
    return (  
        <div>
        <h2>Song List Title</h2>
            <ul>{
                songs.map(
                    song=>{
                        return(<li key={song.id}>
                            {song.title}
                        </li>)
                    }
                )
                
                }
                
            </ul>
            <SongForm addSongs={addSongs}/>

        </div>
    );
}
 
export default SongList;