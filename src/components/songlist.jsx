import React, { useState } from 'react';

const SongList = () => {

    const [songs,setSongs] = useState([
        {id:1,title:"Sing With Me"},
        {id:1,title:"Freak Out!"},
        {id:1,title:"last Dance"},

    ])
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

        </div>
    );
}
 
export default SongList;