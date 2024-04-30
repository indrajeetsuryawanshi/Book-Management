const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/route.js');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://indrajeetsuryawanshi2592:wKtr2zhgSBY4l47o@cluster0.adkej1b.mongodb.net/bookmanagment', {

})
.then(()=> console.log("MongoDB is connected"))
.catch(err => console.log(err))


app.use(cors());

app.use(bodyParser.json());

app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
