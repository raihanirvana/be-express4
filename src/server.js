import app from './app';
import startDB from './configs/mongoDb';

startDB();
app.listen('3004');
