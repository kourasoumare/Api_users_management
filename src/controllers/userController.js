import * as userService from '../services/userService.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const result = await userService.getAllUsers(page, limit);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
    const userId = req.params.id;
    const result = await userService.getUserById(userId);
    res.json(result);
} catch (error) {
    next(error)};


};

export const createUser = async (req, res, next) => {
    try {

        const userData = req.body;
        if (!userData.email || !userData.name || !userData.password) {
            return res.status(400).json({ message: 'Email, name and password are required' });
        }
        const user = await userService.createUser(userData);
        res.json(user);


    } catch (error) {
        next(error);
    }
};


export const updateUser = async (req, res, next) => {
    try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await userService.updateUser(userId, userData);
    res.json(user);

} catch (error) {
    next(error)};

};
export const deleteUser = async (req, res, next) => {
    try {
    const userId = req.params.id;
    const deleteRes = await userService.deleteUser(userId);
    if (!deleteRes){
        return res.json({ 
            message: 'User not found' 
        });
    }
    res.json({ message: 'User deleted successfully' });

} catch (error) {
    next(error)};

}
