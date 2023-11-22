import express from 'express';
import fs from 'fs';
import sharp from 'sharp';
import middleware from '../utilis/middleware';

//to create a new router object
const routes = express.Router();

const imagesChoices: Array<string> = [
  'palmtunnel.jpg',
  'icelandwaterfall.jpg',
  'encenadaport.jpg',
  'santamonica.jpg',
  'fjord.jpg',
];

routes.get('/', middleware, (req: express.Request, res: express.Response) => {
  const apiResize = req.query;
  const imageName: string = (apiResize.imageName as string) + '.jpg';
  const height: number | string = apiResize.height as string;
  const width: number | string = apiResize.width as string;

  if (!imagesChoices.includes(imageName)) {
    // Handle unvaild image name value
    return res.status(404).json({ Error: 'Please pass a valid image name ' });
    // Handle unvaild height value
  } else if (Number.isNaN(height)) {
    return res.status(400).json({ Error: 'please pass a vaild height' });
    // Handle unvaild width value
  } else if (Number.isNaN(height)) {
    return res.status(400).json({ Error: 'please pass a vaild width' });
  }
  //cashing an image to improve its performance
  const imageCashing: string =
    `.//Cashe//${imageName + height + width}` + '.jpg';

  if (fs.existsSync(imageCashing)) {
    res.status(200).sendFile(imageCashing, { root: '.' });
  } else {
    imageResize(imageName, height, width);
    setTimeout((): void => {
      res.status(200).sendFile(imageCashing, { root: '.' });
    }, 200);
  }
});

//image resize function using sharp
export async function imageResize(
  imageName: string,
  height: string,
  width: string
): Promise<void> {
  try {
    await sharp(`.\\images\\${imageName}`)
      .resize({
        width: parseInt(width),
        height: parseInt(height),
      })
      .toFile(`.\\Cashe\\${imageName + height + width}` + '.jpg');
  } catch (error) {
    console.log(error);
  }
}

export default routes;
