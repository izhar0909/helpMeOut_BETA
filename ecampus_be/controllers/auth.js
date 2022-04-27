const User = require('../models/user')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
const { admin } = require('../firebase');

exports.register = (req, res) => {
    console.log(req.body)
    User.findOne({email: req.body.email}).exec((err, user) => {
        if (user) {
            return res.status(400).send({
                error: 'Email is taken'
            })
        }

        const { name, email, deviceToken, password} =  req.body

        let newUser = new User({name, email, deviceToken, password})
        newUser.save((err, success) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    error: err
                })
            }
            res.send({
                message: "registered Succesfully"
            })
        })
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    User.findOne({ email })
    .exec((err, user) => {
        if (err || !user) {
            return res.status(400).send({
                error: 'User with that email does not exist. Please signup.'
            });
        }
        if (!user.authenticate(password)) {
            return res.status(400).send({
                error: 'Email and password do not match.'
            });
        }
        if (user.deviceToken === req.body.deviceToken) {
            console.log("TOKEN AVAILABLE")
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                    
            res.cookie('token', token, { expiresIn: '1d' });
            const { _id, username, name, email, role } = user;
            res.send({
                token,
                user: { _id, username, name, email, role }
            });
        } else {
                User.findByIdAndUpdate(user._id, {
                    $set: {deviceToken : req.body.deviceToken}
                }, (err, success) => {
                    if (err) {
                        console.log(err)
                    } else {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                                
                        res.cookie('token', token, { expiresIn: '1d' });
                        const { _id, username, name, email, role } = user;
                        res.send({
                            token,
                            user: { _id, username, name, email, role }
                        });
                        // res.send({
                        //     message: "Notification channel updated successfully"
                        // })
                    }
                })
            }
        
        console.log(user)
    });
};

exports.getNotifications = () => {
    User.find({})
    .exec((err, users) => {
        if (err) { 
            console.log(err)
        } else {
            console.log(users)
            const dToken = users.map((t, i) => {
                console.log(t.deviceToken)
                return t.deviceToken
            })

            const message = {
                notification : {
                    title: `Notification`,
                    body: `This is to notify`
                },
                tokens: dToken 
            }
            admin.messaging().sendMulticast(message).then(res => {
                console.log("RES", res)
            }).catch(err => {
                console.log(err)
            })
        }
    })
}