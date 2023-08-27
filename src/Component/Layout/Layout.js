import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
   <React.Fragment>
<Header/>
{children}
<Footer/>
   </React.Fragment>
  )
}

export default Layout