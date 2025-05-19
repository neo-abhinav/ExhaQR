const express = require('express');
const path = require('path');
const jsQR = require('jsqr'); // QR code decoding library

const app = express();
const port = 3000;

// Serve static files (including index.html)
app.use(express.static(path.join(__dirname, '.'))); //  Serves the HTML file

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
