import { HttpException, HttpStatus } from '@nestjs/common';

export const throwNotFound = () => {
  throw new HttpException(
    {
      status: HttpStatus.NOT_FOUND,
      error: 'URL não encontrada',
    },
    HttpStatus.NOT_FOUND,
  );
};

export const throwBadRequest = (message: string) => {
  throw new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      error: message,
    },
    HttpStatus.BAD_REQUEST,
  );
};
