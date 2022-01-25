import { nanoid } from 'nanoid';

export const lambdaHandler = async () => {
  return `hello ${nanoid()}`;
};
