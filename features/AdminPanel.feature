Feature: Admin panel functionality

  Background:
    Given I navigate to the login page
    And I login with valid credentials
    And I navigate to "Admin Panel"

#DNAAPP-1787
#DNAAPP-2623
  Scenario: Create admin and delete the admin successfully
    Given I move to "User Panel" tab
    When I create a test admin
    Then I should see the notification that "User successfully created."
    When I search for the test admin
    When I click the action button for the test admin
    And I select the delete option for the test admin
    Then I confirm to delete the user
    And I should see the notification that "User deleted successfully!"

