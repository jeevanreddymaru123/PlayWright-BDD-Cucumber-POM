Feature: Recent page functionality

  Background:
    Given I navigate to the login page
    And I login with valid credentials

  Scenario: Verify entities appear in Recent after being accessed
    When I access the following entities from their respective tabs:
      | entityType | entityName         |
      | Reports    | All Members        |
      | Dashboards | Attrition Analysis |
    And I navigate to the "Recent" page
    Then I should see the following entities in recent:
      | entityType | entityName         |
      | Report     | All Members        |
      | Dashboard  | Attrition Analysis |
