const Student = require('../models/student');

exports.postForm = (req, res) => {
    rollno = req.body.rollno;
    firstName = req.body.first_name;
    lastName = req.body.last_name;

    console.log(response);
    const student = new Student(rollno, firstName, lastName);
    studeny
        .save()
        .then(() => {
        res.redirect('/');
        })
    .catch(err => console.log(err));
    res.end(JSON.stringify({rollno, firstName, lastName}));
}