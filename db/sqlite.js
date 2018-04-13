var sqlite3 = require('sqlite3').verbose();
 //var db = new sqlite3.Database(':memory:');
//var db = new sqlite3.Database('DBFile/JobHunting.db');

exports.getTestData = function () {
    var db = new sqlite3.Database('DBFile/JobHunting.db');
    const uuidv1 = require('uuid/v1');
    //uuidv1(); // ⇨ 'f64f2940-fae4-11e7-8c5f-ef356f279131'
    console.log(uuidv1());
    db.serialize(function () {
        // db.run('CREATE TABLE lorem (info TEXT)');
        // db.run('select * from T_User');
        // var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

        // for (var i = 0; i < 10; i++) {
        //     stmt.run('Ipsum ' + i);
        // }

        // stmt.finalize();

        db.run("insert into T_User (ID, UserName, Password, Role, RID) values ($id, $name, $pw, $role, $rid)", {
            $id: uuidv1(),
            $name: 'Yang Lin',
            $pw: '123',
            $role: 'other',
            $rid: '3'
           });

        db.all('select * from T_User', function (err, rows) {
            console.log(err);
            rows.forEach(function (row) {
                console.log(row.UserName);
            });
        });
    });

    db.close();
}