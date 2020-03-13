
// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      return result;
    });
  };

  insertOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "INSERT INTO ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      return result;
    });
  };

  updateOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "UPDATE FROM ?? WHERE ?? = ?" ;

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      return result;
    });
  }

};


module.exports = orm;
