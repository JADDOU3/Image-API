import { Request, Response } from 'express';
import { processImage } from '../utils/resize';
import path from 'path';
import fs from 'fs';

export const resizeImage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height) {
    res
      .status(400)
      .send('Missing required parameters: filename, width, height');
    return;
  }

  const inputPath = path.join(__dirname, '../../images', `${filename}.jpg`);
  const outputPath = path.join(
    __dirname,
    '../../cache',
    `${filename}_${width}x${height}.jpg`,
  );

  if (fs.existsSync(outputPath)) {
    res.sendFile(outputPath);
    return;
  }

  if (!fs.existsSync(inputPath)) {
    res.status(404).send(`Image not found: ${filename}.jpg`);
    return;
  }

  try {
    await processImage(
      inputPath,
      outputPath,
      parseInt(width as string),
      parseInt(height as string),
    );
    res.sendFile(outputPath);
  } catch (error) {
    res.status(500).send('Error processing image');
  }
};
