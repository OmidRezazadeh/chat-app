
const jwt = require("jsonwebtoken");
const User =require( "../model/User");
const bcrypt= require('bcryptjs');
const registerValidation = require('../Validation/UserValidation'); // Correct import


     exports.register= async(req, res)=> {
        console.log(req.body);
        try {
            const { error } = registerValidation.validate(req.body);
            if (error) {
                return res.status(400).json({ msg: error.details[0].message });
            }
    

            const { email } = req.body;
            let exitsUser = await User.findOne({ email });
            if (exitsUser) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);

            let user = {
                name: req.body.name,
                email: email,
                password: password,
            };

            const userModel = await User.create(user);
            token = await generateToken(userModel.id, email, userModel.name);
            res.status(201).json({ "user": userModel,"token":token });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    const generateToken = (userId, email, name) => {
        const token = jwt.sign(
            { user: { userId, email, name } },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        return token;
    }


