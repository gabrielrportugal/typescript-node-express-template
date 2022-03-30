import express, { Request, Response } from 'express';

const app = express();

app.get('/ping', (request: Request, response: Response) =>
  response.send('pingou')
);

app.listen(3333, () => console.log('🚀 Server started on port 3333'));
