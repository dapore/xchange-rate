import Animal from '../src/animal';
import { expect } from 'chai';

describe('Animal', () => {
  it('should return right result on speak', () => {
    const name = 'Symba';
    const animal = new Animal(name);
    expect(animal.speak()).to.be.equal(`${name} makes a noise.`);
  });
});
