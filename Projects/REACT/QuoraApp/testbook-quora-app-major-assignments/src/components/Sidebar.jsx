import React from 'react';
import { List, ListItem, ListItemText, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import './RightSidebar.css';

const StyledList = styled(List)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  width: '250px',
}));

const PlusIcon = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.paper,
  boxShadow: theme.shadows[4],
  color: theme.palette.primary.main,
  borderRadius: '10%',
  padding: theme.spacing(0.5, 1),
  marginRight: theme.spacing(1),
}));

const avtarImageCss = {
  marginRight: 1,
  padding: 0.2,
  width: 20,
  height: 20,
}

const Sidebar = () => {
  return (
    <StyledList
      component="nav"
    >
      <ListItem>
        <PlusIcon>+</PlusIcon>
        <b>Create Space</b>
      </ListItem>

      <ListItem >
        <Avatar alt="Science" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Science" />
      </ListItem>
      <ListItem >
        <Avatar alt="Books" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Books" />
      </ListItem>
      <ListItem >
        <Avatar alt="Visiting and Travel" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Visiting and Travel" />
      </ListItem>
      <ListItem >
        <Avatar alt="Business" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Business" />
      </ListItem>
      <ListItem >
        <Avatar alt="Technology" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Technology" />
      </ListItem>
      <ListItem >
        <Avatar alt="Web Design" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Web Design" />
      </ListItem>
      <ListItem >
        <Avatar alt="Software and Applications" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Software and Applications" />
      </ListItem>
      <ListItem >
        <Avatar alt="Websites" src="path/to/your/avatar.jpg" sx={avtarImageCss} variant="square" />
        <ListItemText primary="Websites" />
      </ListItem>
    </StyledList>
  );
};

export default Sidebar;