# 03-Password-Generator

For this assignment,we were tasked with creating a password generator.

## Our Goal

We want our password generator to meet the following criteria:

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock Up

We were given starting code that creates a page that looks like this:

![The Password Generator application displays a red button to "Generate Password".](./03-javascript-homework-demo.png)

Upon clicking `Generate Password`, you are given prompts to answer: 

![Prompts asking for input.](./pwgenprompt.png)

Invalid inputs will yield:

![This is a message displayed when invalid inputs are entered.](./pwgeninvalid.png)

Upon completing the prompts, you will be offered a randomized password:

![Randomized password generated.](./pwgenrando.png)


## Links

`Repository`: https://github.com/KIMOISQUIGGLES/03-Password-Generator

`Webpage`: https://kimoisquiggles.github.io/03-Password-Generator/
