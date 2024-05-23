// // src/PasswordReset.js
// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { sendPasswordResetEmail } from 'firebase/auth';

// const PasswordReset = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage('Password reset email sent successfully. Please check your email.');
//       setError('');
//     } catch (error) {
//       setError(error.message);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <form onSubmit={handlePasswordReset}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <button type="submit">Reset</button>
//       </form>
//       {message && <p>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default PasswordReset;


// src/PasswordReset.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent successfully. Please check your email.');
      setError('');
    } catch (error) {
      setError(error.message);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Reset Password</h2>
      <form onSubmit={handlePasswordReset} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Reset</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: 'teal',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '420px'
  },
  message: {
    marginTop: '20px',
    color: 'green',
  },
  error: {
    marginTop: '20px',
    color: 'red',
  },
};

export default PasswordReset;
