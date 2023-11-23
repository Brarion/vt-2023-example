import { sqr } from "./sqr"

describe('sqr', () => {
  it('should return sqr of positive number', () => {
    const result = sqr(2);

    expect(result).toBe(4);
  });

  it('should return sqr of negative number', () => {
    const result = sqr(-2);

    expect(result).toBe(4);
  });

  it('should return sqr of zero number', () => {
    const result = sqr(0);

    expect(result).toBe(0);
  });

  it('should throw sqr of NaN', () => {
    const result = sqr(Number.NaN);

    expect(result).toBe(Number.NaN);
  });

  it('should throw sqr of EPSILON', () => {
    const result = sqr(Number.EPSILON);

    expect(result).toBe(4.930380657631324e-32);
  });

  it('should throw sqr of MAX_SAFE_INTEGER', () => {
    const result = sqr(Number.MAX_SAFE_INTEGER);

    expect(result).toBe(8.112963841460666e+31);
  });

  it('should throw sqr of MAX_VALUE', () => {
    const result = sqr(Number.MAX_VALUE);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  });

  it('should throw sqr of MIN_SAFE_INTEGER', () => {
    const result = sqr(Number.MIN_SAFE_INTEGER);

    expect(result).toBe(8.112963841460666e+31);
  });

  it('should throw sqr of MIN_VALUE', () => {
    const result = sqr(Number.MIN_VALUE);

    expect(result).toBe(0);
  });

  it('should throw sqr of NEGATIVE_INFINITY', () => {
    const result = sqr(Number.NEGATIVE_INFINITY);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  });


  it('should throw sqr of POSITIVE_INFINITY', () => {
    const result = sqr(Number.POSITIVE_INFINITY);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  });

})