const express = require( 'express' )
const app = express()

// middlewares
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

// Routes
app.use( require( './routes/cartera' ) );
app.use( require( './routes/usuario' ) );

//port
app.listen( 4000 )