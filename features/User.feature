Feature: User create, edit, delete functionality

    Background:
        Given I navigate to the login page
        And I login with valid credentials
        And I search and select "Forma Gym" workspace
        And I move to "Users" tab

    Scenario: Create user, edit the existing user and delete user succesfully
        When I create a test user
        Then I should see the notification that "User created successfully!"
        When I select the Edit action for the test user
        Then Edit a random field and save
        Then I should see the notification that "User updated successfully!"
        When I select the Delete action for the test user
        Then I confirm to delete the user
        Then I should see the notification that "User deleted successfully!"

    Scenario: Create user with invalid credentials
        When I create a user with invalid credentials
        And I should see the notification that "Failed to create user!"

    Scenario: Delete user in the edit user window
        Given I create a test user
        And I select the Edit action for the test user
        When I select Delete User from the edit user window
        Then I confirm to delete the user
        Then I should see the notification that "User deleted successfully!"

    Scenario: Bulk user creation via CSV upload
        When I start the bulk user creation process
        And I upload the bulk user CSV file
        When I save the bulk user creation
        Then I should see the notification that "Bulk Users Created Successfully!"
        And I send emails for bulk users
        Then I should see the notification that "Emails Triggered to Pending Users successfully !"
    
