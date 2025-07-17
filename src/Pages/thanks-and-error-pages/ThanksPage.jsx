import React from 'react';
import { Link } from 'react-router-dom';

const ThanksPage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      marginTop:"30px",
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    },
   
  };

  return (
    <div style={styles.container}>
      <h1 className='secTitleGreen'>Thank You!</h1>
      <p className='paraBlack' >Your enquiry has been successfully submitted. We’ll get back to you shortly.</p>
      <Link to="/" className='btn green-btn' style={styles.button}>Done</Link>
    </div>
  );
};

export default ThanksPage;
