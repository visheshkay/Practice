import React from 'react'
import { Outlet } from 'react-router'
import NavbarComponent from '../NavbarComponent/NavbarComponent'

function Root() {
    return (
        <div>
            <NavbarComponent/>
            <Outlet/>
        </div>
    )
}

export default Root
