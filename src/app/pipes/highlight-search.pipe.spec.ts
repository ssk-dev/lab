import { HighlightSearchPipe } from './highlight-search.pipe';

describe('TablePipe', () => {
  it('create an instance', () => {
    const pipe: HighlightSearchPipe = new HighlightSearchPipe();
    expect(pipe).toBeTruthy();
  });
});
