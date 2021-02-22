require('dotenv').config()
const app = require('./app')
require('./database')

const main = () => {
    app.listen(app.get('port'), () => {
        console.log('App listening on port ' + app.get('port'));
        console.log('http://localhost:3000/');
    });
}

main()