import { Injectable } from '@nestjs/common';
import { NewUrlInput, Url } from './app.types';
import { generateShort, validateUrl } from './app.helpers';
import { throwBadRequest, throwNotFound } from './app.errors';

@Injectable()
export class AppService {
  private shortenedUrls: Url[] = [];

  getUrl(link: string, request: Request): any {
    const url = this.shortenedUrls.find((url) => url.shortened === link);
    if (!url) throwNotFound();

    console.log(request.headers);
    url.totalClicks++;
    return {
      url: url.original,
    };
  }

  getClicks(link: string): any {
    const url: Url = this.shortenedUrls.find((url) => url.shortened === link);
    if (!url) throwNotFound();

    return `Total de clicks na URL: ${url.totalClicks}`;
  }

  async createUrl(body: NewUrlInput): Promise<string[]> {
    const { original } = body;
    const count = body.count || 1;

    if (count > 10)
      throwBadRequest('O limite de criação de múltiplas URLs é 10');

    await validateUrl(original);

    const newUrls: Url[] = [];

    for (let i = 0; i < count; i++) {
      const newUrl = {
        original,
        shortened: generateShort(this.shortenedUrls),
        totalClicks: 0,
      };
      newUrls.push(newUrl);
    }
    this.shortenedUrls.push(...newUrls);
    return newUrls.map((url) => `http:\\localhost:3000\\${url.shortened}`);
  }
}
