import React from 'react'
import { katalogdata } from '../store/data'
import { useParams } from 'react-router-dom'

const Katalogresults = () => {

  const { id } = useParams()

  const data = katalogdata.find(e => e.id === parseInt(id))


  return (
      <div>
          <div className="container">
              
          </div>
    </div>
  )
}

export default Katalogresults