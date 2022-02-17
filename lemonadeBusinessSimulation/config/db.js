const db = require('mysql');

// mysql://b0257831f4729d:0aa60487@us-cdbr-east-05.cleardb.net/heroku_dd0e029cd1bd601?reconnect=true


if(process.env.NODE_ENV === 'production')
{
  const connection = db.createPool({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b0257831f4729d',
    password: '0aa60487',
    database: 'heroku_dd0e029cd1bd601'
  });

  

  module.exports = connection;
} else {
  const connection = db.createConnection({
    user: 'root',
    password: '',
    database: 'mydb'
  });

  connection.connect((err) => {
    if(err) {
        console.log(err);
    }

    console.log("Connected as id " + connection.threadId);
  });

  module.exports = connection;
}




// var del = connection._protocol._delegateError;
// connection._protocol._delegateError = function(err, sequence){
//   if (err.fatal) {
//     console.trace('fatal error: ' + err.message);
//   }
//   return del.call(this, err, sequence);
// };


