import { UniqueIdService } from "./unique-id.service";

// Instead of writing 'className' write className.name so that
// when if class name is Changed, it will get the name dynamically
describe(UniqueIdService.name, () => {
  // Same can be done with method name for when it is altered in ts file
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });

});
