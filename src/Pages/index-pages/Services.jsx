import React, { useEffect } from 'react'

const Services = () => {
    useEffect(() => {
      document.documentElement.scrollTop = 0; // html
      document.body.scrollTop = 0; // body
      window.scrollTo(0, 0); // window fallback
    }, []);
  return (
    <div>Services</div>
  )
}

export default Services