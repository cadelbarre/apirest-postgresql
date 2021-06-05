const db = require( '../db/index' )

/*
const obtenerUsuario = ( req, res ) => {
    const query = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [ req.params.id ]
    }

    db.query( query, ( err, res ) => {
        if ( err ) {
            return next( err )
        }
        res.send( res.rows[ 0 ] )
    } )

}
*/


// const getUsers = async (req, res) => {
//     const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
//     res.status(200).json(response.rows);
// };

// const getUserById = async (req, res) => {
//     const id = parseInt(req.params.id);
//     const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
//     res.json(response.rows);
// };

// const createUser = async (req, res) => {
//     const { name, email } = req.body;
//     const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
//     res.json({
//         message: 'User Added successfully',
//         body: {
//             user: {name, email}
//         }
//     })
// };

module.exports = {

}