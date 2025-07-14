import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

When(
  "I add the following entities to favorites:",
  async function (this: CustomWorld, dataTable) {
    for (const { entityType, entityName } of dataTable.hashes()) {
      await this.favouritePage.addEntityToFavourites(entityType, entityName);
    }
  }
);

Then(
  "I should see the following favorites:",
  async function (this: CustomWorld, dataTable) {
    for (const { entityType, entityName } of dataTable.hashes()) {
      await this.favouritePage.assertEntityInFavourites(entityType, entityName);
    }
  }
);

When('I remove the following entities from favorites:', async function(this: CustomWorld, dataTable) {
  for (const { entityType, entityName } of dataTable.hashes()) {
    await this.favouritePage.removeEntityFromFavourites(entityType, entityName);
  }
});
