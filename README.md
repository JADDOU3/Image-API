# Image Processing API

A simple API for resizing images using Node.js, Express, and Sharp.

## Description

This Image Processing API allows you to resize JPG images by specifying the filename, width, and height as query parameters. The API will resize the image and return the resized version. It also implements caching to avoid reprocessing the same image with the same dimensions multiple times.

## Features

- Resize images to specified dimensions
- Caching of processed images for improved performance
- Error handling for missing parameters, non-existent images, etc.
- Written in TypeScript for type safety

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

## Usage

### Starting the server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 3000 by default: http://localhost:3000

### API Endpoints

#### GET /api/images

Resizes an image based on the provided parameters.

**Query Parameters:**
- `filename` (required): The name of the image file (without extension)
- `width` (required): The desired width of the resized image (in pixels)
- `height` (required): The desired height of the resized image (in pixels)

**Example:**
```
http://localhost:3000/api/images?filename=test&width=300&height=200
```

**Responses:**
- `200 OK`: Returns the resized image
- `400 Bad Request`: Missing required parameters
- `404 Not Found`: Image not found
- `500 Internal Server Error`: Error processing image

## Project Structure

```
.
├── cache/                  # Cached resized images
├── dist/                   # Compiled JavaScript files
├── images/                 # Original images
├── spec/                   # Test files
│   ├── endpointSpec.ts     # API endpoint tests
│   ├── imageSpec.ts        # Image processing tests
│   └── ...
├── src/                    # Source code
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   └── index.ts            # Application entry point
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Development

### Available Scripts

- `npm start`: Start the server in production mode
- `npm run dev`: Start the server in development mode with hot reloading
- `npm run build`: Compile TypeScript to JavaScript
- `npm run lint`: Run ESLint to check code quality
- `npm run format`: Format code using Prettier
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode

### Adding Images

To add new images to the API:
1. Place your JPG images in the `images/` directory
2. Use the filename (without extension) in your API requests

## Testing

The project uses Jasmine for testing. Run the tests with:

```bash
npm test
```

There are two types of tests:
1. Endpoint tests: Test the API endpoints and responses
2. Image processing tests: Test the image resizing functionality

## Dependencies

- Express: Web framework for Node.js
- Sharp: Image processing library
- TypeScript: JavaScript with syntax for types
- Jasmine: Testing framework
- ESLint & Prettier: Code quality and formatting tools

## License

ISC