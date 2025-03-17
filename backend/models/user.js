const db = require('../config/config');
const bcrypt = require('bcrypt');

const User = {
  create: async (user, result) => {
    const sql = 'INSERT INTO users (name, email, password, created_at ) VALUES (?, ?, ?, NOW())';
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      db.query(sql, [user.name, user.email, hashedPassword], (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
        result(null, res.insertId);
      });
    } catch (err) {
      result(err, null);
    }
  },
};

module.exports = User;