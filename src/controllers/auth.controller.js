import jwt from "jsonwebtoken";
const users = new Map();
export const registerController = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = users.has(email);
        if (!user) {
            users.set(email, req.body);
            return res.status(201).send("created");
        }
        return res.status(401).send("user already exists");
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
        const payload = {
            sub: email,
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
