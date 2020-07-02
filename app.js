const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require('./routes/post_routes');
const mongoose = require('mongoose');

const port = process.env.PORT || 3010;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConn = 'mongodb://localhost/louises_blog';
mongoose.connect(
	dbConn,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err) => {
		if (err) {
			console.log('Error connecting to database', err);
		} else {
			console.log('Connected to database');
		}
	}
);

app.use('/posts', postRouter);

app.listen(port, () => console.log('Server running on port: ', port));
