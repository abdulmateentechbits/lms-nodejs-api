import express from 'express';


const router = express.Router();
export const doLogin = async (req, res) => {

    res.status(200).json("doLogin");
}

export const getCourses = async (req, res) => {
    res.status(200).json("getCourses");
}

export const getCourse = async (req, res) => {
    res.status(200).json("getCourse");
}

export const doLogout = async (req, res) => {
    res.status(200).json("doLogout");
}

export const deleteCourse = async (req, res) => {
    res.status(200).json("deleteCourse");
}
export const updateCourse = async (req, res) => {
    res.status(200).json("updateCourse");
}

export default router;