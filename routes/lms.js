import express from 'express';

import { doLogin,doLogout,getCourse,getCourses,deleteCourse,updateCourse } from '../controllers/lms.js';

const router = express.Router();

router.post('/login', doLogin);
router.get('/logout', doLogout);
router.get('/', getCourses);
router.get('/:id', getCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;