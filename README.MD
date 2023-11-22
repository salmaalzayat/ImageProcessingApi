# Image Processing API

Image Processing API is an API which allows users to view certain library of images and also allows them to get a resized version of the original image.

## syntax:

-To start write after http://localhost:3000
/api/images? followed by imageName= the name of the image
followed by &width= &height= with the desired width and height of the image.

-Example
http://localhost:3000/api/images?imageName=fjord&height=444&width=444

## scripts:

To deploy this project run

```bash
-npm install
```

```bash
-npm run build
```

```bash
-npm run start

```

```bash
-npm run jasmine
```

```bash
-npm run prettier
```

```bash
-npm run lint
```

## Meets Specifications:

Congratulations on completing the project! You've worked on the comments from earlier review... well done
However, pls check section comments... for correct prettier script
Thanks

## Setup and Architecture

- Source code is kept separate from compiled code.
- All tests should be contained in their own folder.
- Separate modules are created for any processing.
- Package.json should contain both devDependencies, and dependencies.
- Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
- Build script should run without error.
  prettier and lint scripts are included

## Functionality

- Start script should run without error
- Provided endpoint should open in the browser with status 200
- Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.
- An error message should be provided to the user when an image has failed to process or does not exist.

## Code Quality

- Test script runs and all tests created pass.
- There is at least 1 test per endpoint and at least one test for image processing.
- All code in the SRC folder should use the .ts filetype.
- Functions should include typed parameters and return types and not use the any type.
- Import and Export used for modules.
- Build script should successfully compile TS to JS.
- Prettier and Lint scripts should run without producing any error messages.
