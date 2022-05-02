
export const hello = (request, response) => {
  response.send('Hello. Is it me you\'re looking for?');
}

export const helloPerson = (request, response) => {
  const { person } = request.params; // here we extract person from the response
  response.send(`Hello there, ${person}.`);
}

export const greetNewPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  // response.send({ firstName, lastName });
  response.send(`Hello there, ${firstName} ${lastName}.`);
}
