const express = require('express');
const app = express();
const PORT = 3400;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
// Define an array of books
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel set in the American South during the 1930s, dealing with the issues of racial injustice and moral growth.",
        price: 15.99
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel portraying a totalitarian society where freedom of thought is suppressed.",
        price: 12.49
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel depicting the lives of the Bennet family and their relationships.",
        price: 10.99
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel set in the Jazz Age, exploring themes of decadence, idealism, and the American Dream.",
        price: 11.79
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series, following the young wizard Harry's adventures at Hogwarts School of Witchcraft and Wizardry.",
        price: 9.99
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A coming-of-age novel that follows the disillusioned teenager Holden Caulfield through his experiences in New York City.",
        price: 8.99
    }
];

// app.get('/', (req, res)=> {
//     res.send('<h1>Hello World</h1>');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/BooksData.html');
});



app.post('/booksadd', (req,res) => {

    //console.log(req.body);

    //const response = fetch('http://localhost:3400/books');
    const data = req.body;

    if(!data.title || !data.author) {
        return res.status(400).json({ error : `Title and author are required`});
    }
    data.id = books.length + 1;

    books.push(data);
    res.status(201).json(data);

    //console.log(data);

    
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(book=>book.id === bookID);

    if(!book) {
        res.status(400).json({Message: ' Book Not Found'});
    } else {
        res.json(book);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening at port no ${PORT}`);
});