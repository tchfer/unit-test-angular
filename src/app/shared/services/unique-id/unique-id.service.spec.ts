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

});
