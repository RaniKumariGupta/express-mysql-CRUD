// const connection = require("../config/db");

// //Get all user list 
// const getuser = async (req, res) => {
//     try {
//         const data = await connection.query(' SELECT * FROM user')
//         if(!data){
//             return res.status(404).send({
//                 success:false,
//                 message:'No records found'
//             })
//         }
//         res.status(200).send({
//             success:true,
//             message:'All user records',
//             data
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:'Error in get all user api',
//             error
//         })
//     }  
// };

const dbConnection = require('../config/db'); // Ensure correct path

exports.createUser = (req, res) => {
    const { userName, Email, Password } = req.body;
    const sql = 'INSERT INTO user (userName, Email, Password) VALUES (?, ?, ?)';
    dbConnection.query(sql, [userName, Email, Password ], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    });
};

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM user';
    dbConnection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM user WHERE id = ?';
    dbConnection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result[0]);
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { userName, Email, Password  } = req.body;
    const sql = 'UPDATE user SET userName = ?, Email = ?, Password = ? WHERE id = ?';
    dbConnection.query(sql, [userName, Email, Password, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM user WHERE id = ?';
    dbConnection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};



