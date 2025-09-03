import sharp from 'sharp';

export const processImage = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
): Promise<void> => {
  await sharp(inputPath)
    .resize(width, height)
    .toFormat('jpeg')
    .toFile(outputPath);
};
