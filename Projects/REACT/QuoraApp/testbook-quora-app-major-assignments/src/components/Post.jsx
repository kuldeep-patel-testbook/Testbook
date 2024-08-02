import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Box, Button } from '@mui/material';
import { ThumbUp, ThumbDown, ChatBubbleOutline, Repeat, MoreHoriz, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple, green, pink, blue } from '@mui/material/colors';

const StyledCard = styled(Card)(() => ({
  maxWidth: 600,
  margin: '10px auto',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: '56.25%',
}));

const Post = ({ post }) => {
  let bgcolor = '';
  if (post.id === 1) {
    bgcolor = deepOrange[500]
  } else if (post.id === 2) {
    bgcolor = deepPurple[500]
  }
  else if (post.id === 3) {
    bgcolor = green[500]
  }
  else if (post.id === 4) {
    bgcolor = pink[500]
  }
  else if (post.id === 5) {
    bgcolor = blue[500]
  }
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar alt={post.name} src={post.avatar} sx={{ bgcolor: bgcolor }} />}
        action={
          <IconButton alt="Hide" title='Hide'>
            <Close />
          </IconButton>
        }
        title={post.name}
        subheader={post.location}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description}
        </Typography>
      </CardContent>
      <StyledCardMedia
        image={post.image}
        title={post.title}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Button startIcon={<ThumbUp />} size="small">{post.upvotes}</Button>
          <Button startIcon={<ThumbDown />} size="small">Downvote</Button>
          <Button startIcon={<ChatBubbleOutline />} size="small">{post.comments}</Button>
          <Button startIcon={<Repeat />} size="small">{post.shares}</Button>
          <IconButton alt="More" title='More'>
            <MoreHoriz />
          </IconButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default Post;