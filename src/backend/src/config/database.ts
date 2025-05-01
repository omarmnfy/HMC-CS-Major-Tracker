import mongoose from 'mongoose';
import { logger } from '../utils/logger';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://wlu_major_tracker_admin:zazo20232005@cluster0.vahqpyb.mongodb.net/major-tracker?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = async (): Promise<void> => {
  try {
    logger.info('Attempting to connect to MongoDB Atlas...');
    
    // Configure Mongoose options
    mongoose.set('strictQuery', false);
    
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    });
    
    logger.info('Connected to MongoDB Atlas successfully');
    
    // Log database events
    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });
    
    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected');
    });
  } catch (error) {
    logger.error('MongoDB connection error:', error);
    process.exit(1);
  }
}; 