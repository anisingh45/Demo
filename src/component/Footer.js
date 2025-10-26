import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: '#fff',
        py: 4,
        mt: 'auto',
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Branding */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              YourBrand
            </Typography>
            <Typography variant="body2">
              Making web experiences easier and better.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Login
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: support@yourbrand.com</Typography>
            <Typography variant="body2">Phone: +91 12345 67890</Typography>
            <Typography variant="body2">Location: India</Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" pt={4} fontSize="small">
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
