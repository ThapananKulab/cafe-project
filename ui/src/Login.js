import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    
    </Typography>
  );
}

const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
      // Implement your Google login logic here
      // You might want to use a library like Firebase or a social authentication provider
  
      // For simplicity, let's just log a message
      console.log('Perform Google login');
    };
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
       
      <Avatar
        alt="Logo"
        src="https://img.freepik.com/premium-vector/graphic-flat-design-drawing-fresh-stylized-lemonade-ice-with-sliced-lemon-logo-label-flyer-symbol-restaurant-drink-menu-cafe-shop-food-delivery-service-cartoon-style-vector-illustration_620206-2924.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=ais" // Replace with the URL of your logo image
        sx={{ width: 200, height: 200, mb: 2 }}
      />
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 2, backgroundColor: '#4285F4' }}
            >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                style={{ width: '24px', height: '24px', marginRight: '12px' }}
            />
                Sign In with Google
            </Button> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}