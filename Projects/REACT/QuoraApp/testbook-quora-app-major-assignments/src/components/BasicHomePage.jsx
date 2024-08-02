import React from 'react';
import { Container, Grid, Paper, TextField, Box, Avatar, Divider, IconButton } from '@mui/material';
import { QuestionAnswer, PostAdd, Edit } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import Post from './Post';
import './BasicHomePage.css';
import RightSidebar from './RightSidebar';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const businessPostsData = [
  {
    id: 1,
    avatar: 'path/to/your/avatar.jpg',
    name: 'Amit Jain',
    location: 'CEO at Tech Innovations · Updated 1h',
    title: 'The Importance of Networking in Business',
    description: "Networking is crucial for any business professional. It opens doors to new opportunities, helps in finding mentors, and can lead to valuable partnerships. Attending industry events, joining professional groups, and leveraging social media are effective strategies.",
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4',
    upvotes: '8.2K',
    comments: 231,
    shares: 102,
  },
  {
    id: 2,
    avatar: 'path/to/your/avatar.jpg',
    name: 'Neha Gupta',
    location: 'Marketing Director at Creative Agency · Updated 2d',
    title: 'How to Create a Successful Marketing Strategy',
    description: "Creating a successful marketing strategy involves understanding your target audience, setting clear goals, and using data-driven insights to make informed decisions. Consistency and creativity in your campaigns can significantly boost brand recognition and customer engagement.",
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
    upvotes: '6.4K',
    comments: 147,
    shares: 67,
  },
  {
    id: 3,
    avatar: 'path/to/your/avatar.jpg',
    name: 'Rajesh Mehta',
    location: 'Entrepreneur and Investor · Updated 3d',
    title: 'Top 5 Investment Strategies for 2024',
    description: "With the market constantly evolving, it's essential to stay informed about the latest investment strategies. Diversifying your portfolio, investing in technology stocks, considering sustainable investments, and keeping an eye on emerging markets can yield substantial returns.",
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b',
    upvotes: '5.9K',
    comments: 184,
    shares: 92,
  },
  {
    id: 4,
    avatar: 'path/to/your/avatar.jpg',
    name: 'Priya Singh',
    location: 'HR Manager at Fintech Solutions · Updated 4h',
    title: 'Effective Leadership in the Workplace',
    description: "Effective leadership involves clear communication, empathy, and the ability to inspire and motivate your team. Encouraging a culture of feedback, recognizing achievements, and providing opportunities for growth are key aspects of good leadership.",
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980',
    upvotes: '7.3K',
    comments: 205,
    shares: 89,
  },
  {
    id: 5,
    avatar: 'path/to/your/avatar.jpg',
    name: 'Vikas Chandra',
    location: 'Financial Analyst at Global Investments · Updated 5d',
    title: 'Analyzing Market Trends for Better Business Decisions',
    description: "Staying updated with market trends is vital for making informed business decisions. Utilizing data analytics, staying abreast of economic indicators, and understanding consumer behavior can help in predicting market movements and identifying growth opportunities.",
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    upvotes: '4.8K',
    comments: 123,
    shares: 54,
  },
];

const BasicHomePage = () => {

  return (
    <>
      <StyledContainer>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2.5} className="sidebar-section" display="flex" height="85vh">
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={7}>
            <Container className="bhomepage">
              <StyledPaper elevation={0} style={{ padding: '1px', marginBottom: '1px', backgroundColor: '#f1f3f2' }}>
                <Box className="question-section" display="flex" alignItems="center" p={2} paddingBottom={5} boxShadow={3} mt={0} mb={2} position={'relative'}>
                  <Avatar alt="Kuldeep Patel" src="path/to/your/avatar.jpg" />
                  <TextField
                    variant="outlined"
                    label="What do you want to ask or share?"
                    placeholder="What do you want to ask or share?"
                    fullWidth
                    margin="normal"
                    sx={{ marginLeft: 1, marginRight: 0.5 }}
                  />
                  <IconButton color="primary" aria-label="ask" title='Ask' sx={{ width: 5, position: 'absolute', top: 90, left: 120 }}>
                    <QuestionAnswer /> Ask
                    <Divider orientation="vertical" flexItem sx={{ marginLeft: 8, borderWidth: 0.5 }} />
                  </IconButton>

                  <IconButton color="primary" aria-label="answer" title='Answer' sx={{ width: 5, position: 'absolute', top: 90, left: 330 }}>
                    <PostAdd /> Answer
                    <Divider orientation="vertical" flexItem sx={{ marginLeft: 8, borderWidth: 0.5 }} />
                  </IconButton>
                  <IconButton color="primary" aria-label="post" title='Post' sx={{ width: 5, position: 'absolute', top: 90, left: 520 }}>
                    <Edit /> Post
                  </IconButton>
                </Box>

                {businessPostsData.map(post => (
                  <Box key={post.id} className="post-section" display="flex" justifyContent="center" alignItems="center">
                    <Post post={post} />
                  </Box>
                ))}

              </StyledPaper>
            </Container>
          </Grid>
          <Grid item xs={12} md={2.5} className="sidebar-section">
            <RightSidebar />
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};



export default BasicHomePage;