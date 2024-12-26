const fetchData = async (url, options = {}) => {
    try {
        // 1. send the request, get the HTTP response
        const response = await fetch(url, options);

        // 2. Check to see if the 
        // Throw an error if the response was not 2xx - let the catch statement handle it
        if (!response.ok) throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)

        const contentType = response.headers.get('content-type');
        if (contentType === null || !contentType.includes('application/json')) {
            // If the contentType of the response is not JSON, read the stream as plain text
            const textData = await response.text();
            return textData;
        }

        // 3. Read the ReadableStream
        const jsonData = await response.json();
        return jsonData;
    }
    catch (error) {
        // if there was an error, log it and return a tuple: [data, error]
        console.error(error.message);
        return error;
    }
}

const baseUrl = 'https://test-server-pgma.onrender.com'
const password = 'bananabread';

const getPosts = () => {
    fetchData(`${baseUrl}/api/posts`).then(console.log);
}

const getPostsByUserName = async (username) => {
    const posts = await fetchData(`${baseUrl}/api/posts/${username}`);
    console.log(posts);
}

const getPostById = async (id) => {
    const posts = await fetchData(`${baseUrl}/api/posts/${id}`);
    console.log(posts);
}

const createPost = async (username, content, img_url) => {
    const newPost = {
        username,
        content, 
        img_url
    };

    const options = {
        method: "POST",       
        body: JSON.stringify(newPost), 
        headers: {
            "Content-Type": "application/json"
        }
    };

    const returnedPost = await fetchData(`${baseUrl}/api/posts?password=bananabread`, options);
    console.log(returnedPost);
}

const deletePostById = (id) => {
    const options = {
        method: 'DELETE'
    }
    fetchData(`${baseUrl}/api/posts/${id}?password=bananabread`, options);
}


const main = async () => {
    createPost('Athena', "Algorithm: A word used by programmers when they don't want to explain how their code works.");
    getPosts();
    // getPostsByUserName('Ben');
    deletePostById(20);
}

main();