const express = require('express'); var cors = require('cors');
const app = express(); const port = process.env.PORT || 6123; 
app.use(cors());

// create a GET route
app.get('/api', (req, res) => {     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT with corsConfigurer' }); 
  }); 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 
