import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    },
    errorCode: {
      fontSize: '6rem',
      color: 'black',
      marginBottom: '1rem'
    },
   
   
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 className='secTitleGreen'>Page Not Found</h2>
      <p className='paraBlack'>Oops! The page you’re looking for doesn’t exist.</p>
      <Link className='btn green-btn' to="/" >Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
