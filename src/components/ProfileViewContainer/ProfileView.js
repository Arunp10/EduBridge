import React from 'react'
import Footer from './Footer'
import Profile from './Profile'
import Header from './Header'
import Resume from './Resume'

export default function ProfileView() {
  return (
    <div className='profileview-container'>
      <Header/>
      <Profile name = "Laksh choithani"/>
        {/* <Footer/> */}
        {/* <Resume/> */}
    </div>
  )
}
