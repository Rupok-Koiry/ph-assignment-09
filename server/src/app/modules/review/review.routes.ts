import express from 'express';
import { createReview, updateReview, deleteReview } from './review.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// Review Routes
router.post('/:productId', auth('user'), createReview);
router.patch('/:reviewId', auth('user'), updateReview);
router.delete('/:reviewId', auth('user', 'admin'), deleteReview);
export default router;
