starterQuestion = [
    {
        type: 'list',
        name: 'starterQ',
        message: "How would you like to manage your team? (Required)",
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    },
]

// engineerQuestions = [
//     {
//         type: 'input',
//         name: 'enName',
//         message: "What the engineer's name? (Required)",
//         validate: enName => {
//             if (enName) {
//                 return true;
//             } else {
//                 console.log("Please enter your engineer's name!");
//                 return false;
//             }
//         }
//     }
// ]

module.exports = { starterQuestion, };