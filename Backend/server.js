const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const pollRoutes = express.Router();
const voteRoutes = express.Router();
const PORT = 3050;

let Poll = require('./poll.model');
let Vote = require('./vote.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/polls', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

pollRoutes.route('/').get(function(req, res) {
    Poll.find(function(err, polls) {
        if (err) {
            console.log(err);
        } else {
            res.json(polls);
        }
    }).sort('-created_at');
});

pollRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Poll.findById(id, function(err, poll) {
        res.json(poll);
    });
});

pollRoutes.route('/add').post(function(req, res) {
    let poll = new Poll(req.body);
    poll.save()
        .then(poll => {
            res.status(200).json({'poll': 'poll added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new poll failed');
        });
});

pollRoutes.route('/update/:id').post(function(req, res) {
    Poll.findById(req.params.id, function(err, poll) {
        if (!poll)
            res.status(404).send('data is not found');
        else
            poll.question = req.body.question;
            poll.option1 = req.body.option1;
            poll.option2 = req.body.option2;
            poll.option3 = req.body.option3

            poll.save().then(poll => {
                res.json('Poll updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

voteRoutes.route('/').get(function(req, res) {
    Vote.find(function(err, votes) {
        if (err) {
            console.log(err);
        } else {
            res.json(votes);
        }
    }).sort('-created_at');
});

voteRoutes.route('/add').post(function(req, res) {
    let vote = new Vote(req.body);
    vote.save()
        .then(poll => {
            res.status(200).json({'vote': 'vote added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new poll failed');
        });
});

app.use('/polls', pollRoutes);
app.use('/votes', voteRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});