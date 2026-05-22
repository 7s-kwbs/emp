import React from 'react'

const PrimaryButton = ({icon, value}) => {
  return (
    <div className='bg-blue-600 rounded text-white font-semibold px-2 py-1 w-fit active:scale-95 hover:bg-blue-700 cursor-pointer'>

        <p>{icon} {value}</p>
    </div>
  )
}

export default PrimaryButton