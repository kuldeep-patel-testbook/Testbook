const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const PORT = 8000;


// Define GraphQL Schema
const typeDefs = `
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
    }
    type Todo {
        id: ID!
        title: String!
        completed: Boolean
    }
    type Query {
        getTodos: [Todo]
        getAllUsers: [User]
        getUser(id: ID!) User
    }
`;

// Define Resolvers
// const resolvers = {
//     Query: {
//         getTodos: async () =>
//         (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
//         getAllUsers: async () =>
//             (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
//         getUser: async (parent, {id}) =>
//             (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
//     },
// };

async function startServer() {
    const app = express();
    // const server = new ApolloServer({ typeDefs, resolvers });
    // await server.start();

    // app.use(bodyParser.json());
    // app.use(cors());
    
    // app.use('/graphql', expressMiddleware(server));


    // Callback Function Example
    /*function add (a, b) {
        return a + b;
    }

    function divide(a, b) {
        return a / b;
    }

    function operations( a, b, calllback) {
        return calllback(a,b);
    }

    console.log("add operations", operations(50, 60, add));

    console.log("divide operations", operations(50, 6, divide));*/
    

    app.listen(PORT, () => {
        console.log(`Server Started at PORT ${PORT}`);
    });
}

startServer();