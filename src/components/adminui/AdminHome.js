import React from 'react'
import {AdminMovieList}from './AdminMovieList'
import{AdminNav} from './AdminNav'
export  function AdminHome() {
    return (
        <div>
            <AdminNav/>
            <AdminMovieList/>
        </div>
    )
}
