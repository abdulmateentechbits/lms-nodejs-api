import express from 'express';
import { subCategories } from '../utils/courses.js';

const router = express.Router();
export const doLogin = async (req, res) => {
    const {name, password} = req.body;

    const option = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: name,
            password: password,
            expiresInMins: 60, // optional
          })
    }
    
    try {
        
          fetch('https://dummyjson.com/auth/login',option).
          then(res=>res.json()).
          then((result)=>{
            console.log("result: ",result);
            res.status(200).json(result)
          })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getCourses = async (req, res) => {
    res.status(200).json({data:subCategories, message:'Success'});
}

export const deleteCourse = async (req, res) => {
    res.status(200).json("deleteCourse");
}
export const updateCourse = async (req, res) => {
    res.status(200).json("updateCourse");
}
export const getCourse = async (req, res) => {
    res.status(200).json("getCourse");
}

export const doLogout = async (req, res) => {
    res.status(200).json("doLogout");
}


export default router;