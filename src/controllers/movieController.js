import * as movieService from '../services/movieService.js';

//get all movies
export const getAllMovies = async (req, res) => {
    try {
        const result = await movieService.getAllMovies();
        res.json(result);   
    } catch (error) {
        next(error);
    }
};

//get movie by id
export const getMovieById = async (req, res, next) => {
    try {
        const result = await movieService.getMovieById(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

//create movie
export const createMovie = async (req, res, next) => {
    try {
        const movieData = req.body;
        if (!movieData.title || !movieData.releaseYear || !movieData.genre || !movieData.director) {
            return res.status(400).json({ message: "Title, releaseYear, genre and director are required" });
        }
        const result = await movieService.createMovie(movieData);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};
//update movie
export const updateMovie = async (req, res, next) => {
    try {
        const result = await movieService.updateMovie(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
//delete movie
export const deleteMovie = async (req, res, next) => {
    try {
        const result = await movieService.deleteMovie(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
//search movies
export const searchMovies = async (req, res, next) => {
    try {
        const { title, genre } = req.query;
        const result = await movieService.searchMovies(title, genre);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

    