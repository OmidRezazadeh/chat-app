const jwt  =require('jsonwebtoken');

exports.authenticated = (req, res, next) => {
  const authHeader = req.get('Authorization');

  try {
    if (!authHeader) {
      return res.status(400).json({ message: 'مجوز کافی ندارید' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {

        if (err) {
          const ExpiredError = new Error('لطفا مجددا لاگین کنید');
          (ExpiredError ).status = 400;
          throw ExpiredError;
        }
        const FailedAuthenticateError = new Error('لاگین با مشکل مواجه شد');
        (FailedAuthenticateError ).status = 400;
        throw FailedAuthenticateError;
      }

    });
    next();
  } catch (err) {
    next(err);
  }
};