import { UniqueIdService } from "./unique-id.service";

// Instead of writing 'className' write className.name so that
// when if class name is Changed, it will get the name dynamically
describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  // Same can be done with method name for when it is altered in ts file
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times`, ()=> {
    const ids = new Set();
    for(let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    // Cleaner and more dynamic way to writing if more empty values are added
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach(emptyValue => {
      // Throw needs to be wrapped a function to work
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        // withContext is good to check which value is breaking the test
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });

    // Easiest way to write the test to throw when value empty
    // expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
  });

});
