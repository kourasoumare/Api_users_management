import prisma from '../models/prisma.js';
import { comparePasswords, hashPassword } from '../utils/passwords.js';
import { generateToken } from '../utils/token.js';

const login = async (email, password) => {
    // find if user exist
    const user  = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        const error = new Error("Invalid email or password");
        error.status = 401;
        throw error;
    }
    // compare passwords
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
        const error = new Error("Invalid email or password");
        error.status = 401;
        throw error;
    }
    // generate token
    const token = generateToken(user.id);
    return{ 
        
        user : {
            id: user.id,
            name: user.name,
            email: user.email
        },
        token,
    };

}  




const register = async (name, email, password) => {
    // check if user exist
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        const error = new Error("User already exists");
        error.status = 409;
        throw error;
    }
     // hash password
    const hashedPassword = await hashPassword(password);
     
    // create new user
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });

    // generate token
    const token = generateToken(user.id);

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email   
        },
        token,
    };
};

// recuperer les infos du user connecté
const getMe = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
        }
    });
    if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
    }

    return user;
};





export { login, register, getMe }; 