import React from 'react'
import Footer from './Footer';
import styles from './layout.module.css'

interface LayoutProps {
    children: React.ReactNode
    home?: boolean
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className = { styles.container }>
            { children }
            <Footer/>
        </div>
    );
}