import React from 'react'
import Navbar from '../component/navbar'
// import img from '../constant/images'
// import icons from '../constant/icons'

export default function Home() {
  return (
    <div className=' h-auto w-full flex flex-col justify-start items-center'>
        <div className='h-auto w-full max-w-[1200px] flex flex-col justify-center items-center'>
            <Navbar />
            <div className='w-full h-auto mt-44 bg-red-500 flex flex-col'>
                <div className='w-full h-[350px] bg-green-500 flex justify-between items-center'>
                    <div className='w-1/2'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
