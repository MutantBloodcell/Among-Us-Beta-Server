const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 22023;


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  
  if (req.url.includes('/api/games') || req.url.includes('/matchmaker')) {
    return res.end(JSON.stringify([]));
  }

  
  if (req.url.includes('/api/user') || req.url.includes('/authenticate')) {
    res.writeHead(200);
    return res.end(JSON.stringify({
      success: true,
      username: "Player",
      ticket: "beta-token-123"
    }));
  }

  
  res.writeHead(200);
  res.end("Impostor Beta Server is running!");
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
