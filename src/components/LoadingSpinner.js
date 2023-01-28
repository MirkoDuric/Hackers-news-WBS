import React from 'react'
import { useState } from 'react';
import "../../src/styles.css"
import Posts from '../views/Posts';

const LoadingSpinner = () => {

  return (
    <div className="spinner-container">
       <div className="loading-spinner">
       </div>
    </div>
  )
}

export default LoadingSpinner