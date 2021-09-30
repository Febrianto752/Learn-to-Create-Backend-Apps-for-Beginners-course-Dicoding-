console.log('Halo, kita akan belajar membuat server');

const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'NodeJS');
  // response.statusCode = 200;

  const {
    method,
    url
  } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'Ini adalah homepage'
      }));
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`
      }));
    }

  } else if (url === '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'Halo! ini adalah halaman about'
      }));
    } else if (method === 'POST') {

      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const {
          name
        } = JSON.parse(body);
        response.statusCode = 200;
        response.end(JSON.stringify({
          message: `Halo ${name}, Ini adalah halaman about`
        }));
      });
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses menggunakan ${method} request`
      }));
    }
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({
      message: 'Halaman tidak ditemukan'
    }));
  }





  // if (method === 'POST') {
  //   let body = [];

  //   request.on('data', (chunk) => { // event client mengirimkan request data 
  //     body.push(chunk);
  //     /* chunk berisi data yang dikirimkan oleh client tetapi dalam bentuk buffer, contoh array yg berisi buffer: [
  //       <Buffer 7b 22 6e 61 6d 65 22 3a 20 22 44 69 63 6f 64 69 6e 67 22 7d>
  //     ]*/
  //   })

  //   request.on('end', () => {
  //     body = Buffer.concat(body).toString(); // output String : {"name": "Dicoding"}
  //     // output Buffer.concat(body) = buffer : <Buffer 7b 22 6e 61 6d 65 22 3a 20 22 44 69 63 6f 64 69 6e 67 22 7d>
  //     console.log(body);
  //     const {
  //       name
  //     } = JSON.parse(body);
  //     response.end(`<h1>Hai ${name}</h1>`);
  //   })
  // }
  // if (method === 'PUT') {
  //   response.end('<h1>Response PUT</h1>');
  // }
  // if (method === 'DELETE') {
  //   response.end('<h1>Response DELETE</h1>');
  // }

});

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});