import { UppercaseFirstLetterOfWordPipe } from './uppercase-first-letter-of-word.pipe';

describe('UppercaseFirstLetterOfWordPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseFirstLetterOfWordPipe();
    expect(pipe).toBeTruthy();
  });
});
