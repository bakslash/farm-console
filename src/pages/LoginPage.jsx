import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  TextField, Button, Card, CardContent, Typography, Box, Link, InputAdornment
} from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import logo from '../assets/logo.png'; // Import your logo

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // Basic validation logic (can be replaced with real authentication)
    if (email === 'admin@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)', // Improved gradient
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 3, // Extra padding for mobile responsiveness
      }}
    >
      <Card sx={{ maxWidth: 400, boxShadow: 5, borderRadius: 3, width: '100%' }}>
        <CardContent>
          <Box textAlign="center" mb={3}>
            <img src={logo} alt="App Logo" width={100} />
          </Box>

          <Typography variant="h4" gutterBottom textAlign="center">
            Login
          </Typography>

          {/* Error message */}
          {error && (
            <Typography variant="body2" color="error" align="center" mb={2}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <Box mb={3}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Password Field */}
            <Box mb={3}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: '10px 0',
                borderRadius: 50,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Login
            </Button>

            {/* Forgot Password Link */}
            <Typography variant="body2" align="center" color="textSecondary" mt={2}>
              Forgot your password?{' '}
              <Link href="/forgot-password" underline="hover">
                Click here
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
