import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

// MUI Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" px="40px" py="40px">
    <Stack gap="20px" alignItems="center">
      <Typography fontSize="30px" fontWeight="600">PowerPulse</Typography>
      
      {/* Contact Info */}
      <Stack direction="column" spacing={1} alignItems="center">
        <Typography>Email: <Link href="mailto:powerpulse@example.com" underline="hover">powerpulse@example.com</Link></Typography>
        <Typography>Phone: +91 98765 43210</Typography>
      </Stack>

      {/* Social Icons */}
      <Stack direction="row" spacing={2}>
        <Link href="https://www.facebook.com" target="_blank" color="inherit"><FacebookIcon /></Link>
        <Link href="https://www.instagram.com" target="_blank" color="inherit"><InstagramIcon /></Link>
        <Link href="https://www.twitter.com" target="_blank" color="inherit"><TwitterIcon /></Link>
        <Link href="https://telegram.org" target="_blank" color="inherit"><TelegramIcon /></Link>
      </Stack>
    </Stack>

    {/* Copyright */}
    <Typography
      variant="body2"
      sx={{ fontSize: { lg: '16px', xs: '14px' } }}
      mt="30px"
      textAlign="center"
    >
      &copy; {new Date().getFullYear()} PowerPulse. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
