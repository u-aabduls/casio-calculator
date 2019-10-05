/*******************************************************************
 * EECS3461: User Interfaces, Fall 2019
 * Assignment 1: Casio Fx-2500 using HTML/CSS/JavaScript
 * Student Name: Umar Abdulselam
 * Student EECS account: uaabduls
 * Student ID: 215995616
 *******************************************************************/

 Functionality:

  - Power (ON) button
    - sets power on and animates the power slider being toggled on
    - power button needs to be toggled on for the calculator to be used
  - Negation of coefficient of operands (+/-)
  - Float values (decimal)
  - Computation of binomial expressions with operators in the set
      {+, -, *, ÷}
  - Computation of trigonometric functions with single value: sin, cos, tan
    - e.g. enter 90 -> push sin button -> 0.89'
      - same procedure for cos and tan
  - Computation of sqrt on single values
    - e.g. enter 25 -> push sqrt button -> 5
  - Remove the latest value pressed when building operands (C)
  - Clear both operands and the operator (AC)
  - Both operators and operand reset after the compute function
      (=) is invoked
  - No bugs in functionality are known to author


 Notes:

  - 7-segment font was implemented
  - Hover attribute is disabled for buttons with deferred
      functionality
        - done to avoid confusion of the user
  - Application may require a 13" window for optimal UI appearance,
      though should scale according to viewport size
  - All height, width, margin, padding, font-size attributes
      were set using viewport units (vh, vw)
  - Application has optimal UI display on a 24" screen
  - On screen sizes less than optimal size (e.g. 13), minor
      UI distortion may occur
  - Application was developed on a 13" and 24" monitor
    - at the time of submission, the application UI was not
        distorted in any way
