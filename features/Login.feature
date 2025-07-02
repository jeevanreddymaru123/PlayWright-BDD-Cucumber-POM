Feature: Login functionality

  Background:
    Given I navigate to the login page

  Scenario: Successful login as Global Admin
    When I login as "Global Admin"
    Then I should see the home page
    And I click the profile action button
    And I select the profile option from the menu
    And The profile email should match the "Global Admin" login email

  Scenario: Login failed
    When I login with invalid credentials
    Then I should see the notification that "Wrong e-mail or password!"

  Scenario: Forgot password and reset
    Given I navigate to the login page
    When I click the "Forgot password" link
    Then I should see the notification that "Please provide the email!"
    When I enter the email address for password reset
    And I click the "Forgot password" link
    Then I should see the notification that "Please check your e-mail to continue."
    When I login to outlook to check the reset email
    And I follow the password reset link in the email
    And I set a new password
    Then I should be able to login with the new password

#   Scenario: Successful login as Analyze Admin
#     When I login as "Analyze Admin"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Analyze Admin" login email

#   Scenario: Successful login as Analyze Manager
#     When I login as "Analyze Manager"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Analyze Manager" login email

#   Scenario: Successful login as Analyze Reports Viewer
#     When I login as "Analyze Reports Viewer"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Analyze Reports Viewer" login email

#   Scenario: Successful login as Customize Admin
#     When I login as "Customize Admin"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Customize Admin" login email

#   Scenario: Successful login as Customize Manager
#     When I login as "Customize Manager"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Customize Manager" login email

#   Scenario: Successful login as Customize Reports Viewer
#     When I login as "Customize Reports Viewer"
#     Then I should see the home page
#     And I open the profile page
#     And The profile email should match the "Customize Reports Viewer" login email

