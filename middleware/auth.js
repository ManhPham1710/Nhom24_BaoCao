const jwt = require("jsonwebtoken");

// ================= AUTHENTICATE =================
const authenticate = (req, res, next) => {
  console.log("⚠️ BYPASS AUTH (KHÔNG CHECK TOKEN)");

  // giả lập user (để các API vẫn chạy bình thường)
  req.user = {
    id: 1,
    username: "admin",
    role: "admin",
  };

  next(); // 🔥 luôn cho qua
};

// ================= AUTHORIZE =================
const authorize = (...roles) => {
  return (req, res, next) => {
    // nếu không truyền role thì cho qua luôn
    if (!roles || roles.length === 0) {
      return next();
    }

    // check role giả lập
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Không có quyền",
      });
    }

    next();
  };
};

module.exports = {
  authenticate,
  authorize,
};