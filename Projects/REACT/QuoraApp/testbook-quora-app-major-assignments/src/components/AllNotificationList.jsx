import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

const NotificationContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  backgroundColor: '#f5f5f5',
  padding: '10px',
  borderRadius: '8px',
  marginBottom: '10px',
  position: 'relative',
  marginTop: '10px'
});

const IconContainer = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
});

const NotificationContent = styled(Box)({
  flexGrow: 1,
});

const NotificationHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const NotificationTitle = styled(Typography)({
  fontWeight: 'bold',
});

const MoreIcon = styled(IconButton)({
  position: 'absolute',
  right: '10px',
  top: '10px',
});

const Timestamp = styled(Typography)({
  color: '#888',
  fontSize: '12px',
});


const notifications = [
  {
    id: 1,
    time: '2h ago',
    title: 'Join Spaces on Quora',
    description: 'Follow Spaces to discover content and connect with others who share your interests. Spaces offer a personalized feed, allowing you to stay updated on specific topics, ask questions, and get expert answers. Start exploring now!...',
    icon: '/public/images/quora.svg'
  },
  {
    id: 2,
    time: '5h ago',
    title: 'New Technology Trends in 2024',
    description: 'Explore the latest advancements in AI, Blockchain, and Quantum Computing. Learn how these technologies are transforming industries and discover their potential impacts on business and daily life...',
    icon: '/public/images/AI-2024.avif'
  },
  {
    id: 3,
    time: '1d ago',
    title: 'Upcoming Webinar on Cloud Computing',
    description: 'Join our webinar to learn about serverless computing, edge computing, and multi-cloud strategies. Discover how these innovations can enhance IT infrastructure, improve efficiency, and drive business growth.',
    icon: '/public/images/cloud-computing.svg'
  },
  {
    id: 4,
    time: '3d ago',
    title: 'AI in Healthcare',
    description: 'AI is revolutionizing healthcare with new tools for diagnosis, treatment, and patient care. Learn about the latest AI applications and their potential to improve patient outcomes and streamline clinical processes...',
    icon: '/public/images/11_ai_in_healthcare-512.webp'
  },
  {
    id: 5,
    time: '1w ago',
    title: 'Cybersecurity Best Practices',
    description: 'Stay protected from cyber threats by following best practices for password management, software updates, and network security. Learn how AI and machine learning can enhance your cybersecurity efforts...',
    icon: '/public/images/cyber-security-logo.avif'
  }
];

const AllNotificationList = () => {

  return (
      <>
      {
        notifications.map((notify)=> (
          <Box key={notify.id} className="notification-section">
          <NotificationContainer>
          <IconContainer>
            <img src={notify.icon} alt="Notification Icon" style={{ width: '50px', height: '50px' }} />
          </IconContainer>
          <NotificationContent>
            <NotificationHeader>
              <Timestamp variant="body2">{notify.time}</Timestamp>
              <MoreIcon size="small">
                <MoreVertIcon fontSize="small" />
              </MoreIcon>
            </NotificationHeader>
            <NotificationTitle variant="body2">{notify.title}</NotificationTitle>
            <Typography variant="body2">
            {notify.description}
            </Typography>
          </NotificationContent>
        </NotificationContainer>
        </Box>
        ))
        
      }
      </>
    
  )
}

export default AllNotificationList