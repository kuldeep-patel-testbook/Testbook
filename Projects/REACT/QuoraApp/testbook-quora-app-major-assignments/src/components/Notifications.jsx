import React from 'react';
import './Notifications.css';
import NavBar from './NavBar';
import FilterSection from './FilterSection';
import { Container, Grid, Divider, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import AllNotificationList from './AllNotificationList';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
}));

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const HeaderLink = styled(Typography)({
  cursor: 'pointer',
  fontSize: '14px',
  color: '#0073e6',
});



const Notifications = () => {
  return (
    <div className="notificationContainer">
      <NavBar />
      
      <StyledContainer>
          <Grid container spacing={2}>
            
            <Grid item xs={2}>
              <FilterSection />
            </Grid>
            <Grid item xs={6}>
            <Container className="notioficationPage">
              <Header>
                <Typography variant="h6">Notifications</Typography>
                <HeaderLink>
                  <Typography variant="span">Mark All As Read</Typography>
                  <span> · </span> 
                  <Typography variant="span">Settings</Typography>
                </HeaderLink>
              </Header>
              <Divider component="header" />
              
                <AllNotificationList />
              
              
              {/* <Box className="notification-section" display="flex" justifyContent="center" alignItems="center">
                <AllNotificationList />
              </Box>
              <Box className="notification-section" display="flex" justifyContent="center" alignItems="center">
                <AllNotificationList />
              </Box>
              <Box className="notification-section" display="flex" justifyContent="center" alignItems="center">
                <AllNotificationList />
              </Box>
              <Box className="notification-section" display="flex" justifyContent="center" alignItems="center">
                <AllNotificationList /> 
              </Box>*/}
            </Container>
            </Grid>
          </Grid>
          
      </StyledContainer>
    </div>
  );
};

export default Notifications;
