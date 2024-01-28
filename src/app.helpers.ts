import { faker } from '@faker-js/faker';
import { Url } from './app.types';
import { throwBadRequest } from './app.errors';

export const validateUrl = async (url: string): Promise<void> => {
  const res = await fetch(url);
  if (!res || res.status !== 200) throwBadRequest('URL informada não existe');
};

export const generateShort = (shortenedUrls: Url[]) => {
  let short: string = faker.string.alphanumeric(6);
  while (shortenedUrls.find((url: Url): boolean => url.shortened === short)) {
    short = faker.string.alphanumeric(6);
  }
  return short;
};
