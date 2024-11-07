export const roleGuard = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.roles;
        if (roles.includes(userRole)) {
            next();
        } else {
            res.status(403).send("Permission");
        }
    };
};
