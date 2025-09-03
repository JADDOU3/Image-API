import { processImage } from '../src/utils/resize';
import fs from 'fs';

describe('Image Processor', () => {
  const input = 'images/test.jpg';
  const output = 'cache/test_100x100.jpg';

  it('creates a resized image', async () => {
    await processImage(input, output, 100, 100);
    const exists = fs.existsSync(output);
    expect(exists).toBeTrue();
  });
});
