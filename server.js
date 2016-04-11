const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client/public')));
app.get('/', (req, res)=> {
    res.render('home.ejs', {
        title: 'nodeJs'
    });
});
app.listen(port);
console.log(`project started on port:${port}`);
