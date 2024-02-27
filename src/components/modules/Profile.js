import React from 'react'
import { useAuth } from '../utils/auth'

export default function Profile() {
    const auth = useAuth()
  return (
    <div className='container my-3'>
      <h2>Hello {auth.user}</h2>

      <button  onClick={()=> auth.logout()} className="btn btn-danger my-3 mx-2">Logout</button>

    </div>
  )
}
