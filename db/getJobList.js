var sqlite3 = require('sqlite3').verbose();

exports.getJobData = function (callback) {
    var db = new sqlite3.Database('DBFile/JobHunting.db');
    const uuidv1 = require('uuid/v1');
    db.all('select * from T_Job', function (err, rows) {
        callback(rows)
    });
    db.close();
}