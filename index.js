const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>${"Rachelle Ann L. Terrible"}</h1>
    <p>Class Section: ${"BA4102"}</p>
    <blockquote>"${"Always choose to be kind"}"</blockquote>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
