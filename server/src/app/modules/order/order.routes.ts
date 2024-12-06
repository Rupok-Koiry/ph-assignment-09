import express from 'express';
import {
  placeOrder,
  getUserOrders,
  getOrderDetails,
  getVendorOrders,
} from './order.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// Order Routes
router.post('/', auth('user'), placeOrder);
router.get('/', auth('user'), getUserOrders);
router.get('/:orderId', auth('user', 'vendor', 'admin'), getOrderDetails);
router.get('/vendor/:shopId', auth('vendor'), getVendorOrders);

export default router;