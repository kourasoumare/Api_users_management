import * as authService from "../services/authService.js";


// Login controller
const login = async (req, res, next) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const result = await authService.login(email, password);
    res.json(result);
} catch (error) {
    next(error);
}};



// Register controller

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" });
        }
        const result = await authService.register(name, email, password);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

// Get current user controller
const getMe = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await authService.getMe(userId);
        res.json(user);
    } catch (error) {
        next(error);
    }
};







export { login, register, getMe };