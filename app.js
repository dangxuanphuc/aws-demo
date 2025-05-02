const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('<h1>✅ Express.js auto-deployed from GitHub to EC2 via CodeBuild!</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
