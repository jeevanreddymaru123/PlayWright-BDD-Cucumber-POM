# Feature: Analyze Admin functionality

#   Background:
#     Given I navigate to the login page
#     And I login with valid "Analyze Admin" credentials

#   Scenario: Verify visible items in left menu and tab sections
#     Given I am on the main dashboard
#     Then I should see the following left menu items:
#       | Home             |
#       | Favorites        |
#       | Recent           |
#       | Exported reports |
#       | Admin Panel      |

#     When I click on the "Analyze" tab
#     And I should see the following under the Analyze tab:
#       | Quick Facts |
#       | Dashboards  |
#       | Reports     |

#     When I click on the "Customize" tab
#     And I should see the following under the Customize tab:
#       | Quick Facts |
#       | Dashboards  |
#       | Reports     |
#       | Datasets    |

#   Scenario: Verify user profile dropdown menu items
#     When I click on the user profile menu
#     Then I should see the following user options:
#       | Profile            |
#       | Workspace settings |
#       | Logout             |

#   Scenario: Verify Home page sections and their fallback messages
#     Given I navigate to the "Home" page
#     Then I should see the "Recent Dashboards" section
#     And I should see the message "There are no recent dashboards to display."
#     And I should see the "Recent Reports" section
#     And I should see the message "There are no recent reports to display."
#     And I should see the "Favorite Dashboards" section
#     And I should see the message "There are no tiles to display."
#     And I should see the "Favorite Reports" section
#     And I should see the message "There are no tiles to display."

# #   Scenario: Verify Favorite Dashboards and Reports are listed on Home
# #     Given I navigate to the "Home" page
# #     Then I should see the "Favorite Dashboards" section
# #     And it should list dashboard tiles such as:
# #       | Past Due Analysis |
# #       | Member Portfolio  |
# #       | BETAREPORT#2      |
# #       | Freeze Analysis   |

# #     And I should see the "Favorite Reports" section
# #     And it should list report tiles such as:
# #       | CB DNAAPP-3205 for delete |

# #     Scenario: Verify "Favorites" page default state and "Quick facts" tab content
# #     Given I navigate to the "Favorites" page
# #     Then I should see the "Quick facts" tab selected by default
# #     And I should see a "Search" area
# #     And I should see the message "There are no favorite quick facts to display."

# #   Scenario: Verify "Dashboards" tab content when empty
# #     Given I navigate to the "Favorites" page
# #     When I click on the "Dashboards" tab
# #     Then I should see a "Search" area
# #     And I should see the message "There are no favorite dashboards to display."

# #   Scenario: Verify "Reports" tab content when empty
# #     Given I navigate to the "Favorites" page
# #     When I click on the "Reports" tab
# #     Then I should see a "Search" area
# #     And I should see the message "There are no favorite reports to display."

# #   Scenario: Verify "Adhoc Reports" tab content when empty
# #     Given I navigate to the "Favorites" page
# #     When I click on the "Adhoc Reports" tab
# #     Then I should see a "Search" area
# #     And I should see the message "There are no favorite adhoc reports to display."

# #   Scenario: Verify "Dashboards" tab content with items
# #     Given I navigate to the "Favorites" page
# #     When I click on the "Dashboards" tab
# #     Then I should see a "Search" area
# #     And I should see the "Dashboards" table with the following dashboard tiles:
# #       | Past Due Analysis |
# #       | Member Portfolio  |
# #       | BETAREPORT#2      |
# #       | Freeze Analysis   |
# #     And I should see "4 dashboards" indicating the number of items
# #     And I should see a Pagination area

# #   Scenario: Verify "Reports" tab content with items
# #     Given I navigate to the "Favorites" page
# #     When I click on the "Reports" tab
# #     Then I should see a "Search" area
# #     And I should see the "Reports" table with the following report tile:
# #       | CB DNAAPP-3205 for delete |
# #     And I should see "1 report" indicating the number of items
# #     And I should see a Pagination area

# #  Scenario: Verify "Recent" page content when empty
# #     Given I navigate to the "Recent" page
# #     Then I should see a "Search" area
# #     And I should see the message "There are no recent in this workspace to display."
# #     And I should not see a "<number of recent> Recent" area
# #     And I should not see a Pagination area

