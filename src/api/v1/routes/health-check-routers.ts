import { Router, Request, Response } from 'express';

const HealhtChecker = Router();

HealhtChecker.route('/health/ready').get((req: Request, res: Response) => {
  res.send('OK').status(200);
});

export { HealhtChecker };
