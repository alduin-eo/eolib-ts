import type { IntegerType } from './integer-type';
import type { Type } from './type';

export interface HasUnderlyingType extends Type {
  get underlyingType(): IntegerType;
}

export function hasUnderlyingType(object: any): object is HasUnderlyingType {
  return 'underlyingType' in object;
}
