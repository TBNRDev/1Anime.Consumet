import { BaseParser } from '.';

abstract class BookParser extends BaseParser {
  /**
   * takes book link
   *
   * return book info
   */

  protected abstract fetchBookInfo(bookUrl: string): Promise<unknown>;
}

export default BookParser;