import express from 'express';
import healthCheckController from './healthcheck.controller.js';

const router = express.Router()

router.get('/healthcheck', healthCheckController);

export default router;