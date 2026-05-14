import express from 'express';
import healthcheckController from './healthcheck.controller.js';
const router = express();

router.get('/healthcheck', healthcheckController)

export default router;