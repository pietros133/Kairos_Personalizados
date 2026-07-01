export default function adminOnly(req, res, next) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Nao autenticado" });
  }

  if (user.role !== "admin") {
    return res.status(403).json({ message: "Acesso negado, Apenas Admin" });
  }

  next();
}
