import React from 'react'
import * as Icon from 'react-feather';


const Music = ({item, onSelect }) => {
  return (
    <div className='w-[220px] p-2 min-h-[300px] rounded-xl inline-block relative bg-white/20 m-4 hover:bg-white/50 cursor-pointer/>'>
      <img src= {`${item?.album.images[1].url}`} alt={`${item?.name}`} className='rounded-lg block'/>
      
      <div className=' my-2'>
        <div className='text-base font-bold'>
          <h1>{item?.name}</h1>
        </div>

        <div className='text-sm flex flex-wrap text-white/50 max-h-full max-w-full '>
          {item?.artists.map((artist, index, array) => (
            <h1 className='font-bold ' key={index}>
              {index < 2 ? (index === 0 ? artist.name : `, ${artist.name}`) : null}
            </h1>
          ))}
          {item?.artists.length > 2 && <h1 className='font-bold'>...</h1>}
        </div>

        <div className='absolute w-[205px] h-[205px] top-2 flex justify-center items-center opacity-0 hover:opacity-100'>
            <p><Icon.PlayCircle color='#1DB954' size={56} /></p>
        </div>
      </div>

  </div>   
  )
}

export default Music