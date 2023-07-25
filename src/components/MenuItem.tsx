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
    <ul className='hidden space-x-4 md:flex'>
    <Link href={address} className="">
        {/* <Icon className="" /> */}
        <li className="headerLink">{title}</li>
      </Link>
    </ul>

    </>
  )
}

export default MenuItem