import prisma from "../models/prisma.js";


//get all movies
export const getAllMovies = async () => {
    const movies = await prisma.movie.findMany();
    return movies;
}


//get movie by id
export const getMovieById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: { id }
    });

    if (!movie) {
        const error = new Error("Movie not found");
        error.status = 404;
        throw error;
    }

    return { data: movie };
};


//create movie
export const createMovie = async (movieData) => {
    const movie = await prisma.movie.create({
        data: {
            title: movieData.title,
            description: movieData.description,
            releaseYear: movieData.releaseYear,
            genre: movieData.genre,
            director: movieData.director,
            rating: movieData.rating,
        }
    });

    return { data: movie };
};


//update movie
export const updateMovie = async (id, movieData) => {
    const movie = await prisma.movie.update({
        where: { id },
        data: {
            ...(movieData.title && { title: movieData.title }),
            ...(movieData.description && { description: movieData.description }),
            ...(movieData.releaseYear && { releaseYear: movieData.releaseYear }),
            ...(movieData.genre && { genre: movieData.genre }),
            ...(movieData.director && { director: movieData.director }),
            ...(movieData.rating && { rating: movieData.rating }),
        }
    });

    return { data: movie };
};


//delete movie
export const deleteMovie = async (id) => {
    await getMovieById(id);

    await prisma.movie.delete({
        where: { id }
    });

    return { message: "Movie deleted successfully" };
};


// search movies
export const searchMovies = async (title, genre) => {
    const movies = await prisma.movie.findMany({
        where: {
            ...(title && { title: { contains: title, mode: "insensitive" } }),
            ...(genre && { genre: { contains: genre, mode: "insensitive" } }),
        }
    });

    return {
        data: movies,
        total: movies.length,
    };
};