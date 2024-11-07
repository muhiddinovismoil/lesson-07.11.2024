export const authMiddleware = (req, res, next) => {
    try {
        // const barearToken = req.headers.authorization.split(" ")[1];
        const barearToken = req.headers;
        console.log(barearToken);
    } catch (error) {
        next(error);
    }
};
