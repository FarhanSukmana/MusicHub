import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Request from './request.js';
import Music from './Component/Music.jsx';

const App = () => {

  const accessToken = Request();
  const [artis, setArtis]= useState([])
  const [search, setSearch]=useState('Tulus')

  function formated(e){
    return e.replace(/ /g, '+');
   
  }  
  useEffect(() => {
    if (accessToken) {
      const apiConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      };
      axios
        .get(`https://api.spotify.com/v1/search?q=${search}&type=track`, apiConfig)
        .then((response) => {
          setArtis(response.data.tracks.items)
        })
        .catch((error) => {
          console.error('Error accessing Spotify API:', error);
        });
    }
  }, [accessToken,search]);
  console.log(artis)

  return (
    <div className='h-screen bg-[#191414] overflow-y-scroll scrollbar-hide'>
      <div className='w-full h-[80px] relative md:flex-col '>
        <div className='absolute top-0 items-center justify-center w-full h-auto p-6'>
            <h1  className='text-[#1DB954] font-bold text-3xl sm:text-5xl'>MusicHub</h1>
        </div>
        <div className='text-black w-full h-full flex items-center justify-center'>
          <form 
            className='flex w-full items-center justify-center' >
            <input 
            type="search" 
            placeholder={'Search Artis / Song'}
            className='z-20 p-2 w-[300px] md:w-[300px] focus:outline-none'  

            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                e.preventDefault();
                console.log("TombolENter")
                const format=formated(e.target.value)
                setSearch(format)
              }
            }}
            />

          </form>
        </div>
      </div>

      <div className='flex w-full h-screen justify-center px-12'>
        <div className='w-full h-fit rounded-md  justify-center  bg-white/10 p-6 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {artis.map((item, index)=>(
              <Music 
              key={index} 
              item={item} />
            ))}
        </div>
      </div>
</div>
  );
};

export default App;
