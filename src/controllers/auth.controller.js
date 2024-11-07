import jwt from "jsonwebtoken";
const users = new Map();
export const registerController = async (req, res, next) => {
    try {
        const { email, role } = req.body;
        const user = users.has(email);
        if (!user) {
            if (!role) {
                req.body.role = "user";
            }
            users.set(email, req.body);
            return res.status(201).send("created");
        }
        return res.status(409).send("user already exists");
    } catch (error) {
        next(error);
    }
};
export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = users.has(email);
        if (!user) {
            return res.status(404).send("Not Found");
        }
        const userData = users.get(email);
        const payload = {
            sub: email,
            role: userData.role,
        };
        const ttl = {
            expiresIn: "20m",
        };
        const accessSecretKey = "qwer12345";
        const refreshSecretKey = "12345qwer";
        const accessToken = jwt.sign(payload, accessSecretKey, ttl);
        const refreshToken = jwt.sign(payload, refreshSecretKey, {
            expiresIn: "7d",
        });
        return res.send({
            accessToken,
            refreshToken,
        });
    } catch (error) {
        next(error);
    }
};
