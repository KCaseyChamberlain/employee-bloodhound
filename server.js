const inquirer = require('inquirer');
// const express = require('express');
const db = require('./db/connection.js');
const questions = require('./lib/questions.js');
const cTable = require('console.table');

// const apiRoutes = require('./routes/apiRoutes');

// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Use apiRoutes
// app.use('/api', apiRoutes);

// asks manager questions and saves answers
function starterQuestions() {
    inquirer
        .prompt(questions.starterQuestion)
        .then(function (answers) {
            if(starterQuestion.answers = 'View all employees'){
                console.table([employee])
            }
        })
}


// starts application
starterQuestions()

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('\n', 'Database connected.');
    // app.listen(PORT, () => {
    //     console.log(`Server running on port ${PORT}`);
    // });
});