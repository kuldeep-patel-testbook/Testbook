// Promise Chaining: Demonstrate how to perform multiple asynchronous operations sequentially using Promises.​ 
//Example: Fetching User Data, Posts, and Comments Sequentially

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: 'Kuldeep Patel' });
        }, 1000);
    });
};

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched Posts for User: ${userId}`);
            resolve(["Post1", "Post2", "Post3"]);
        }, 1000);
    });
};

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched Comments for User: ${post}`);
            resolve(["Comment 1", "Comment 2", "Comment 3"]);
        }, 1000);
    });
}

// ✅ Using Promise Chaining
// getUser(101) // → Fetches user data.
// .then((user) => getPosts(user.id)) // → Fetches posts after getting user.
// .then((posts) => getComments(posts[0])) // → Fetches comments for the first post.
// .then(comments => console.log("Final Comments:", comments)) // → Displays final comments.
// .catch((error) => console.error('Error:', error)); // → Handles any error in the chain.


// ✅ Using Async/Await

async function fetchData() {
    try {
        const user = await getUser(101);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0]);

        console.log("Final Comments", comments);
    } catch (error) {
        console.error("Error", error);
    }
}

fetchData();