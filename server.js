import http from 'node:http';

const serverOne = http.createServer((request, response)=>{
  if (request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });

    let data = {
      email : "mmmmm@gmail.com"
    }
    let convertFormat = JSON.stringify(data);

    response.write(convertFormat);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ error: "Not Found" }));
    response.end();
  }
})

serverOne.listen(9010,()=>{
  console.log("http://localhost:9010");
})

const serverTwo = http.createServer((request, response)=>{
  if (request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });

    let data = {
      password : "qwer1234!@"
    }
    let convertFormat = JSON.stringify(data);

    response.write(convertFormat);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ error: "Not Found" }));
    response.end();
  }
})

serverTwo.listen(9020,()=>{
  console.log("http://localhost:9020");
})

