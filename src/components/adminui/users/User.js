import React from 'react'
import  './user.css'

export function User({editButton,deletButton,key,id,avatar,name,email}) {
    return (
        <div className='user'> 
      <p><span>{id}</span>
      <span >{avatar}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{deletButton}</span>
      <span>{editButton}</span></p>
        </div>
    )
}


