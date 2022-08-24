import { HttpException, HttpStatus } from '@nestjs/common';

type Messages = string[] | string;

export class MessageException extends HttpException {
  messages: Messages;
  constructor(response: Messages) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
