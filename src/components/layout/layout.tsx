import React from 'react'
import { Header } from './header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Header />
            <main className='min-h-screen'>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout