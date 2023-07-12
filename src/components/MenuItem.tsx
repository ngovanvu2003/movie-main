import Link from 'next/link'
import React from 'react'
type Props ={
    title:string
    address:string    
    Icon:any
}

const MenuItem = ({title , address , Icon} :Props) => {
  return (
    <>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-red-600">
        <Icon className="text-2xl sm:hidden mx-2" />
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </>
  )
}

export default MenuItem