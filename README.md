# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1 Within a Github action that runs whenever code is pushed 

2 Manually run them locally before pushing code

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. There are many componenents involve in this feature so unit testing is not suitable.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes. We can test this since this is just one small part of the program that does not involve other parts.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

We will not have graphical user interface. For example, you can't hover your mouse and click on setting icon to go to icon page. Instead, we have to use CLI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?



