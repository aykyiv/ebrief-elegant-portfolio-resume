import React from 'react'

function RightSideContent() {
  return (
    <div className=' w-full h-full  flex flex-col gap-10 mx-auto'>
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className='w-full h-[400px] bg-neutral-200 rounded-md'></div>
        ))}

    </div>
  )
}

export default RightSideContent