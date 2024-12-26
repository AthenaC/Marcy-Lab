const fs = require('node:fs/promises');
const foo = () => console.log(`foo`);

const readFile = async () => {
    // One way: `const readFile = () => {`
        // const result = fs.readFile('./story.txt', 'utf-8');
    // Prints the sentence
        // result.then(data => console.log(data)) // Logs this second `The quick brown fox jumps over the lazy dog`
    // Prints the promise
        // console.log(result); // Logs this first `Promise { <pending> }`

    // Second way: Adding `await` to the promise so the `result` becomes the result of the promise
    // (This code IS blocking because of `await`)
        // const result = await fs.readFile('./story.txt', 'utf-8');
    // Returns `Promise { <pending> }` if there's no `async` in main() and `await` in `const result = readFile();`
        // return result; 
    return await fs.readFile('./story.txt', 'utf-8');

    // Third way: Elegant way: (This code is NOT blocking)
    fs.readFile('./story.txt', 'utf-8').then(console.log);
}

const getJoke = async () => {
    try {
        const endpoint = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';
        const response = await fetch(endpoint);
        if (!response.ok) throw Error(`Error! ${response.status}`);
        const jokeData = await response.json();
        return jokeData;
    }
    catch (error) {
        console.error(err.message);
    }
}

const renderFileInfo = (fileContents) => {
    console.log(`Here is your file: ${fileContents}`);
    console.log(`It is ${fileContents.length} characters long.`);
}

const renderJoke = (jokeData) => {
    console.log(jokeData.setup);
    console.log(jokeData.delivery);
}

const main = async () => {
    // const result = readFile();
    // console.log(result); // Logs `Promise { <pending> }`
    const result = await readFile();
    console.log(result); // Logs `The quick brown fox jumps over the lazy dog`
    foo(); //food doesn't wait...

    const fileContents = await readFile();
    // Logs: `Here is your file: The quick brown fox jumps over the lazy dog
    //        It is 43 characters long.`
    renderFileInfo(fileContents);
    readFile.then(renderFileInfo);

    // const jokeData = await getJoke();
    // renderJoke(jokeData)
    getJoke.then(renderJoke);
}

main();