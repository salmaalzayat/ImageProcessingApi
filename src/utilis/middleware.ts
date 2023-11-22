import express from 'express';

const middleware = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  console.log(
    `user requested access to ${req.query.imageName}  height ${req.query.height}  width ${req.query.width}`
  );
  next();
};

export default middleware;
