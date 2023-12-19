const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('/Users/juliacygan/key.pem'),
  cert: fs.readFileSync('/Users/juliacygan/certificate.pem')
};


const server = https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is an HTTPS server!\n');
});
  
const PORT = 8001;
  
server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}/`);
});