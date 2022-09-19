import React from 'react'
import {Route, Routes} from 'react-router-dom' 
import Layout from '../components/layout/Layout'
import AllMeetupsPage from '../pages/AllMeetupsPage'
import FavoritesPage from '../pages/Favorites'
import NewMeetupsPage from '../pages/NewMeetup'

function PublicRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/newmeetups' element={<NewMeetupsPage/>}/>
      </Routes>
    </Layout>
    )
}

export default PublicRoutes