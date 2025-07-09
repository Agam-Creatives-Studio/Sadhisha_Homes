import React from 'react';
import '../layouts/layouts.css'

export const Section = ({children ,className='' }) => {
  return (
    <div className={`section ${className}`}>
        {children}
    </div>
  )
}
