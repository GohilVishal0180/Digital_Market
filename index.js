console.log('Server is running');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
