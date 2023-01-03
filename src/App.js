import React from 'react'


import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'

import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import {Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'

import { FeedbackProvider } from './context/FeedbackContext'


function App() {

    return (
        <>
            <FeedbackProvider>
            <Header text="FeedBack UI" />
            
            <Routes>
                <Route exact path='/' element={<>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <FeedbackList />
                    <AboutIconLink/>
                </>}></Route>
                <Route path='/About' element={<AboutPage />} />

            </Routes>
            </FeedbackProvider>
            

        </>
    )
}




export default App