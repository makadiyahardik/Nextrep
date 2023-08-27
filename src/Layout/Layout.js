import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'

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