Feature: Add To Cart Functionality
    @cart @ui
    Scenario: Verify product added in the cart sucessfully 
        Given I am on login page
        When I enter valid 'standard_user' and 'secret_sauce'
        And I click on loginbutton
        And I click on Add to cart button
        Then verify product added in the cart sucessfully

    Scenario: Verify the product in the cart matches the product page
        Given I am on login page
        When I enter valid 'standard_user' and 'secret_sauce'
        And I click on loginbutton
        And I capture the product name from product page
        And I click on Add to cart button
        And I open the shopping cart
        Then the product name in the cart should match the product page
        @productverify
        Scenario: Verify the expected product is added to the cart
            Given I am on login page
            When I enter valid 'standard_user' and 'secret_sauce'
            And I click on loginbutton
            And I click on Add to cart button
            And I open the shopping cart
            Then the cart should contain product 'Sauce Labs Backpack'
    @remove @cart @ui
    Scenario: Verify product is removed successfully from the cart
        Given I am on login page
        When I enter valid 'standard_user' and 'secret_sauce'
        And I click on loginbutton
        And I click on Add to cart button
        And I open the shopping cart
        And I click the Remove button
        Then the cart should be empty

    @logo @ui
    Scenario: Verify logo present on product page
        Given I am on login page
        When I enter valid 'standard_user' and 'secret_sauce'
        And I click on loginbutton
        Then Verify '<Swag Labs>' logo is present on product page
   