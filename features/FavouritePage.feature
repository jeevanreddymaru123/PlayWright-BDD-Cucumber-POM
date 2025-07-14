Feature: Favourite page functionality

    Background:
        Given I navigate to the login page
        And I login with valid credentials
        And I search and select "Forma Gym" workspace

    Scenario: Add, verify, and remove favorites for Reports, Dashboards, Adhoc Reports, and Quick Facts
        When I add the following entities to favorites:
            | entityType     | entityName         |
            | Reports        | All Members        |
            | Dashboards     | Attrition Analysis |
            | Ad Hoc Reports | SAMPLEGYM          |
        Then I should see the notification that "Favorite successfully added!"
        And I navigate to the "Favorites" page
        Then I should see the following favorites:
            | entityType     | entityName         |
            | Reports        | All Members        |
            | Dashboards     | Attrition Analysis |
            | Adhoc Reports | SAMPLEGYM          |
        When I remove the following entities from favorites:
            | entityType     | entityName         |
            | Reports        | All Members        |
            | Dashboards     | Attrition Analysis |
            | Adhoc Reports | SAMPLEGYM          |
        Then I should see the notification that "Favorite successfully removed!"

