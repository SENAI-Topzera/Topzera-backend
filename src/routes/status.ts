import express from "express";

const router = express.Router();

router.get('/', async function (req, res) {
    const message = `running on hostname localhost in port ${process.env.PORT}`;
    res.send(message);
});

export default router;