import express from 'express';
import imagesRouter from './routes/images';

const app = express();
const PORT = 3000;

app.use('/api/images', imagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
