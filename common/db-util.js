var sql = require('mssql');
var connectionPromise = null;
var db = require('../db');

function getConnectionPoolPromise() {
    if (connectionPromise) return connectionPromise;
    connectionPromise = new Promise((resolve, reject) => {
        sql.connect(db.config).then(pool => {
            return resolve(pool);
        }).catch((err) => {
            connectionPromise = null;
            return reject(err);
        });
    });
    return connectionPromise;
}

exports.query = function (sqlQuery, callback) {
    getConnectionPoolPromise().then((pool) => {
        return pool.request().query(sqlQuery);
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err);
    });
};

exports.excecute = function (sqlQuery, callback) {
    getConnectionPoolPromise().then((pool) => {
        return pool.request().excecute(sqlQuery);
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err);
    });
};