# CSC 317 Assignment 4

**Student**
- [Daniel Jose Dacumos] - [923355989] - [Ddacu]

**Repository Link To Assignment:** https://github.com/Ddacu/CSC317/tree/main/assignments/4

**Live Assignment Assignment 4 | Github Page:** https://ddacu.github.io/CSC317/assignments/4/index.html

**Live Assignment Home | Github Page:** https://ddacu.github.io/CSC317/assignments/Home_Page/index.html

## Description of Implementation
How I had implemented the calculator.js and calculator.html is that I had used "<buttons onclick "_">", so that when the button is pressed it would call a function in Java script that it could use to add the value of the button that was pressed. However, these values are stored inside an <input readonly>, so we can make live changes to it's input data, but we can't type it directly inside without pressing the button.

However, the exception is the keyboard event listener to where the calculator will listen to add that button pressed, but it doesn't require directly selecting it, so it doesn't affect readonly, slight changes is that Backspace does AC and you can directly choose ().

It will then go through calculator.js which will then get the value of the button that  was pressed such as "1" or "%". With const output representing the place where we will see the changes made which is the input as we want to store the values inside it.

However, for some inputs such as the ultilties and operators they needed special if statements to make it work properly with the eval() function such as the divide and multiplication symbol don't work unless it's * or /, so we check and change them as the input is taken. While, for the symbol (), we want it to change everytime it's pressed and there's a number between them, butwe want it to show the same ( if it's pressed before. So I had a let paraCheck to keep track of it. Then for (+/-), if it's pressed and it doesn't start with "-" then it will add it to the start and if it's already there it will be sliced and removed

At the end it does the calculations using the eval() function and tries to catch 
any errors and will alert the user and tell them to clear with AC to try again. For
implementing traversal buttons between the html pages I had just used href and <a>.

**IMPORTANT** 

## DO NOT GIVE EXTRA CREDIT FOR THE THEME SWITCHER IS FROM ASSIGNMENT 3, IT WAS CODED BY A GROUP MEMBER, SO DO NOT GIVE EXTRA CREDIT FOR IT. I DID NOT CODE THAT PART IT WAS PORTED WHEN COPYING THE DATA FROM ASSIGNMENT 3 WHEN PORTING IT TO MY GITHUB. CLARIFICATION, SO THERE'S NO ACCIDENTAL PLAGARISM ACCUSATIONS

## Any additional features or improvements you added beyond the requirements
- Added a Home Page for all the assignments I have done throughout the course which uses the style of hybrid
- Added Go Back Button Styles to all CSS (This is exclusive to Assignment 4)
- Added (), which I was inspired to use after checking out my Samsung Calculator App
- Changed Hybrid.css to use less ai for certain parts to make it more cleaner
- Added Instructions for using a Keyboard, Mouse, or Touch with the Calculator

## Any challenges you faced and how you overcame them
- Getting () to work, as there are several things that happen when you press it will keep going if it's the same (, but it needs to change when there's a number inside or something else, so I had to make sure there was a way to detect if it's been used and that it needs to be the other.
- Getting (+/-) had a similar issue, but it was simple because of the slice, but I also had to track if it was already negative and if it was I need to change it to positive.
- Small Challenge was with the multiplication and division symbol as it wouldn't work with eval() function. The solution was to just make it so that the input is changed to use * and / for multiplication and division.

## Acknowledgment of any resources, tutorials, or code snippets you used

Used to find a way to remove the first element of an array/output.value as I had used slice for adding "-" from (+/-).
- [JS Lecture 2] https://github.com/goleador/CSC317/blob/main/lectures/js-lecture-2.md

Used for understanding keyboard event listeners and how to use key presses.
- [Bro Code] - https://www.youtube.com/watch?v=q32skvBgxo4

Used for understanding User Input and how we normally get it, so using the
information I did the reverse where I directly changed the userinput box using
this information.
- [Bro Code] https://www.youtube.com/watch?v=JeXqaKeJSRI

