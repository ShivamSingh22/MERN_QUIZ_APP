import { Router } from "express";

import * as controller from '../controllers/controller.js'

const router=Router();

//Questions route API

router.get('/questions', controller.getQuestions)
router.post('/questions',controller.insertQuestions)

router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
    .delete(controller.dropQuestions)

router.route('/results')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)    


export default router;
