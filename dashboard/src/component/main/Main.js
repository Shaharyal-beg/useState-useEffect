import React from 'react'
import Leftbar from '../leftbar/Leftbar'
import ContentPage from '../content-page/ContentPage'
import Rightbar from '../rightbar/Rightbar'

const Main = () => {
  return (
    <div className='Main'>
      <Leftbar/>
      <ContentPage/>
      <Rightbar/>

    </div>
  )
}

export default Main