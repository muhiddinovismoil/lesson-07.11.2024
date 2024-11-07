import express from "express";
import { application } from "./src/config/index.js";
import { authRoutes, blogRoutes } from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).send(err);
    }
});
app.listen(application.port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${application.port}`);
});
