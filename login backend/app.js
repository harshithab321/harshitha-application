const express = require('express');
const app = express();
const cors=require('cors')

const bodyParser = require('body-parser')
// Import your controller functions
const { Login, Registration, ForgotPassword } = require('./routes/registration');

app.use(cors())
app.use(bodyParser.json())
// Define routes
app.post('/log', Login);
app.post('/registration', Registration);
app.post('/forgot_password', ForgotPassword);

// Other routes and configurations...

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
