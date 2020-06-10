import logger from './logger';
import thunk from 'react-redux';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
    thunk,
    logger
);