import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

const Layout = ({children,title}) => {
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
    </Head>
    <Header/>
    <main>
    {children}
    </main>
    <Footer/>
    </div>
  )
}

export default Layout

Layout.defaultProps=
{
    title:"My App"
}