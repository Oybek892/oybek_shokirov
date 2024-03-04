import React from 'react'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
// import { Outlet } from 'react-router-dom'

export const MainLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                {/* <Outlet /> */}
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

