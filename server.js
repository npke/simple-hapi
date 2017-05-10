const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 8080});
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply({message: 'Hello, World!', info: 'Powered by Hapi with love'});
  }
});

server.start((err) => {
  return err ? console(err) : console.log('Server running at port 8080');
});