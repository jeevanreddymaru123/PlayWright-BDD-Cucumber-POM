import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { RecentPage } from '../pages/RecentPage';

let recentPage: RecentPage;

When('I access the following entities from their respective tabs:', async function(this: CustomWorld, dataTable) {
  for (const { entityType, entityName } of dataTable.hashes()) {
    await this.recentPage.accessEntity(entityType, entityName);
  }
});

Then('I should see the following entities in recent:', async function(this: CustomWorld, dataTable) {
  for (const { entityType, entityName } of dataTable.hashes()) {
    await this.recentPage.assertEntityInRecent(entityType, entityName);
  }
}); 