import { Injectable } from '@nestjs/common';
import {newUrlInput, url} from "./app.types";
import {faker} from '@faker-js/faker'

@Injectable()
export class AppService {

  private shortenedUrls: url[] = []

  getUrl(link: string): any {
    const url = this.shortenedUrls.find(url => url.shortened === link)
    if (url) {
      url.totalClicks++;
      return {
        url: url.original
      }
    }
    return 'URL não encontrada'
  }

  getClicks(link: string): any {
    const url = this.shortenedUrls.find(url => url.shortened === link)
    if (url) {
      return `Total de clicks na URL: ${url.totalClicks}`
    }
    return 'URL não encontrada'
  }

  createUrl(body: newUrlInput): string {
    const { original } = body
    const newUrl = {
      original,
      shortened: faker.string.alphanumeric(6),
      totalClicks: 0
    }
    this.shortenedUrls.push(newUrl)
    return `Your shortened URL is: localhost:3000/${newUrl.shortened}`
  }
}
