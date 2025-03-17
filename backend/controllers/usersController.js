const User = require('../models/user');

module.exports = {
    register(req, res) {
        const user = req.body;
        User.create(user, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al crear usuario',
                    error: err,
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Usuario registrado',
                data: data,
            });
        });
    },
};
