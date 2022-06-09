import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './layout.module.css'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
    return (
        <div className = {styles.container}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}