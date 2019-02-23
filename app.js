const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
console.log(adminData.routes)
app.use('/admin', adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle: 'Not found',path:''});
});

app.listen(3000);
