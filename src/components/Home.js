import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Management System</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate('/add-student')}>Add Student</button>
        <button style={styles.button} onClick={() => navigate('/students')}>Show Students</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px'
  },
  heading: {
    fontSize: '36px',
    marginBottom: '50px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px'
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4CAF50',
    color: 'white'
  }
};

export default Home;
