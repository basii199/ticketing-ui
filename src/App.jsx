import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import About from './components/About'
import TicketSelection from './components/TicketSelection'
import AttendeeDetails from './components/AttendeeDetails'
import Ready from './components/Ready'

const App = () => {
  const [tickets , setTickets] = useState(0)
  const [ticketType , setTicketType] = useState('REGULAR')
  const [imgUrl, setImagUrl] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [request , setRequest] = useState('')

  const fullDetails = {
    'tickets': [tickets , setTickets],
    'ticketType': [ticketType , setTicketType],
    'imgUrl': [imgUrl, setImagUrl],
    'name': [name , setName],
    'email': [email , setEmail],
    'request': [request , setRequest]
  }

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>

          <Route path='/' element = {<TicketSelection fullDetails={fullDetails}/>}/>
          
          <Route path='/about' element = {<About fullDetails={fullDetails}/>}/>
          
          <Route path='/details' element = {<AttendeeDetails fullDetails={fullDetails}/>}/>
          
          <Route path='/ready' element = {<Ready fullDetails={fullDetails}/>}/>

        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
