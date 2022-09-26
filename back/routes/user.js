const router = require('express').Router();
const User = require('../model/usermodel');

router.route('/').get((req,res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/add').post((req,res) => {
   const item = req.body.item;
   const date = Date.parse(req.body.date);
   const amount = Number(req.body.amount);

    const newUser = new User({
        item,
        date,
        amount,
    });
    newUser.save()
        .then(() => res.json('User Added !'))
        .catch(err => res.status(400).json("Error:" + err));
    
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
    .then(suer => res.json(user))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {

    User.findById(req.params.id)
   .then(user => {
        user.username = req.body.username,
        user.description = req.body.description,
        user.duration = Number(req.body.duration),
        user.date = Date.parse(req.body.date),

        user.save()
        .then(() => res.json('Exercise Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

    

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;