import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './layout.module.css'

interface LayoutProps {
    children: React.ReactNode
    home?: boolean
}

export default function Layout({ children, home}: LayoutProps) {
    return (
        <div className = { styles.container }>
            <Header/>
            { children }
            <Footer/>
        </div>
    );
}