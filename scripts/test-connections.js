import prisma from "./../src/models/prisma.js";

try{
    await prisma.$connect();
    console.log("Successfully connected to the database.");

    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log("Database time:", result);
}catch  {
    console.error("Failed to connect to the database:", error.message);
} finally{
    await prisma.$disconnect();
}