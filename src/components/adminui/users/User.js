import React from 'react'
import  './user.css'

export function User({key,_id,username,email}) {
    return (
      <div className='user'> 
      <p><span>{_id}</span>
      <span>{username}</span>
      <span>{email}</span></p>
        </div>
    )
}


