import { converter } from '../converter';

describe('converter', () => {
  it('should return "ok!"', () => {
    expect(converter()).toEqual('ok!');
  });
});
