import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers?.authorization.split(' ')[1];
    let decodedData;
    if (token) {
      decodedData = await jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
