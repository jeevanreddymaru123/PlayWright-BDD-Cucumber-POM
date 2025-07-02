# Feature: Workspace management

#   Background:
#     Given I navigate to the login page
#     And I login as "Global Admin"
#     Then I should see the home page

#   Scenario: Create a new workspace
#     When I click on the create button
#     And I select workspace from the create options
#     And I type the workspace name "Cultfit"
#     And I click ok to create the workspace
#     Then I should see "New workspace successfully created!"

#   Scenario: Search and navigate to a workspace using the global search bar
#     When I click on the global search bar
#     And I type "For" in the search bar
#     And I select "Forma Gym" from the search results
#     Then I should be navigated to the "Forma Gym" workspace

#   Scenario: Change plan and billing date in workspace
#     Given I search and select "Forma Gym" workspace
#     And I move to "Billing" tab
#     When I change the workspace plan to "Premium"
#     Then I should see the updated plan as "Premium"
#     When I disable the workspace
#     And I change the billing date to "2024-12-01"
#     Then I should see the notification that "Billing Date updated Successfully"
