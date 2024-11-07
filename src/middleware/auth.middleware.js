import jwt from "jsonwebtoken";
export const authGuard = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(409).send("token not found");
        }
        const [type, token] = req.headers.authorization?.split(" ");
        if (type !== "Bearer" || !token) {
            return res.status(409).send("Not valid data");
        }
        jwt.verify(token, "qwer12345", (err, payload) => {
            if (err) {
                return res.status(403).send("Forbidden");
            }
            req.user = payload;
            console.log(payload);
            next();
        });
    } catch (error) {
        next(error);
    }
};
