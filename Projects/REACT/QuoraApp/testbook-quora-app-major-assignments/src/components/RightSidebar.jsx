import React from 'react';
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: '250px',
}));

const spaces = [
  { name: "The Programmers' Cafe", description: "The space to share ideas via Coding", icon: "🗨️" },
  { name: "Programming Algorithms", description: "All about the programming, data structures and algorithms, Let's learn together", icon: "💻" },
  { name: "Python and ML Basics", description: "Basics concepts of Python and Machine Learning for Beginners.", icon: "🐍" },
  { name: "Data Analytics Basics", description: "Business-Statistics | Statistical-Modeling | Analytics-Tools", icon: "📊" },
  { name: "VLSI Beginners", description: "Discuss & Share Ideas, Jobs, Career Tips for VLSI Beginners.", icon: "🧑‍🔧" },
  { name: "The Internships Club", description: "Join this space to get daily updates & info on Internship's Advice", icon: "🧑‍🎓" },
  { name: "Programmer's Heaven", description: "It's all about Computer Programming.", icon: "🖥️" },
  { name: "Artificial Intelligence - Cybersecurity - Hacking", description: "Bringing Humans closer to Machines", icon: "🤖" }
];

const RightSidebar = () => {
  return (
    <StyledList
      component="nav"
    >
      <div className="rightsidebar">
        <h2>Spaces to follow</h2>
        <ul>
          {spaces.map((space, index) => (
            <li key={index} className="space">
              <div className="icon">{space.icon}</div>
              <div className="space-details">
                <div className="space-name">{space.name}</div>
                <div className="space-description">{space.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledList>
  );
};

export default RightSidebar;