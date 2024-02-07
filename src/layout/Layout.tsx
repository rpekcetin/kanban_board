import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import React, { Suspense } from 'react'
import SidebarLayout from '../components/SideBar/SidebarLayout'

const Layout = () => {
    return (
        <div>
            <Suspense fallback={<div >...</div>}>
                <div className='min-h-screen bg-neutral-100'>
                    <div className='flex'>
                        <div className='basis-1/12 lg:basis-0 h-full'>
                            <SidebarLayout />
                        </div>
                        <div className='flex-1 h-screen flex flex-col'>
                            <div className='basis-0'>
                                <Navbar />
                            </div>
                            <div className='flex-1'>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default Layout