Feature: Login Functionality
@login @ui
Scenario: Verify login with valid username and password
    Given I am on login page
    When I enter valid 'standard_user' and 'secret_sauce'
    When I click on loginbutton
    Then I should be on product page

@ui
Scenario: Verify product sort dropdown options
    Given I am on login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click on loginbutton
    When I click on product sort dropdown
    Then I should see the product sort options
    
@loginD
Scenario: Verify login with invalid credentials
    Given I am on login page
    When I enter valid '<username>' and '<password>'
    When I click on loginbutton
    Then Verify error message '<errorMessage>' displayed on login page

    Examples:
        | username            | password |     errorMessage    |
        |                     |          |Username is required |
        |standard_user        |          |Password is required |
        | standard            |pass      |Username and password do not match any user in this service |

