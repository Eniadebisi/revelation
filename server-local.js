'use strict';

const app = require('./server');

app.set('view engine', 'ejs');

app.get("/bye", (req, res) => {
    res.render(index);
})

app.listen(3000, () => console.log('Local app listening on port 3000!'));
