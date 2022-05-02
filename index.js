import express from "express";
import { hello, helloPerson, greetNewPerson } from './src/hello.js';
import { welcomeHome } from './src/welcome.js';

const PORT = 3030;

const app = express();
app.use(express.json());

// routes (or list of allowed requests)
app.get('/hello', hello);
app.post('/hello', greetNewPerson);
// below :person is a param that gets attached to the response
app.get('/hello/:person', helloPerson);

app.get('/', welcomeHome);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));
