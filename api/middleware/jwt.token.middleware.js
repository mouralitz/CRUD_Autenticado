import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // Adiciona o ID do usuário ao objeto req
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Token inválido.' });
  }
};

export default verifyToken;