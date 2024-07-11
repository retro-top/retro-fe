import React from 'react'

interface Props {
    children: React.ReactNode
}

const Gamepad = ({children}: Props) => {
  return (
    <div className='flex flex-col space-y-4 flex-[1] md:max-w-[21rem] border-t md:border-t-0 md:border-r border-gray-800 p-4'>{children}</div>
  )
}

export default Gamepad