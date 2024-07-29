import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const params = useParams();
    const {name} = params;

  return (
    <div>This is student {name}</div>
  )
}

export default Student