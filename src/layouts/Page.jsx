import React from 'react';
import '../layouts/layouts.css'

export const Page = ({children ,className='' }) => {
  return (
    <div className={`page ${className}`}>
        {children}
    </div>
  )
}
