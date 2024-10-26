import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
    <Navbar></Navbar>
        {children} {/* Children will include the banner and other homepage content */}
    
    
        <Footer></Footer>
    </div>
  )
}

export default Layout