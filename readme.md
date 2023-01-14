# JavaScript Album Quiz

This project was originally a quiz of guessing my classmates names in a javascript submission task. I have changed it to guess some of my favorite music albums for privacy reasons.

## The project 

The project requirements was as follow:
- Be responsive, mobile first
- Semanticly correct
- Must use flexbox and/or flexgrid
  - Bootstrap or Tailwind is allowed
- All the data must be renderd from javascript. It's not allowed to use DOM as 'single point of truth'.
- When finished, it mus tbe hosted at 'Netlify'
- Must be version managed with git, ongoing describing commit throughout the whole process.

### Structure
There should be an Array of objects, where each object should have the properties name and image, where name is a string with the name of the person and image is a URL to the image of the person.

The array should NOT contain any information such as answer options or which answer is correct! However, it is fine to add an ID to each person, if you would like.

The array should be able to contain an unlimited number of people (ie you should never assume that the array is a certain length!). When the game starts/restarts, you should be able to choose how many people you want to guess the names for (e.g. 10, 20 or all).

For each person, their photo must be shown, as well as four answer options consisting of the person's name (correct answer) and three randomly selected names of other people. The location of the correct answer must be random so you cannot "cheat" by learning where the correct answer is located. Of course, the same name should not appear twice for the same photo either.

After choosing an answer option for each person, the result should be displayed (alternatively if you press a button "Show result"), as well as after each game round where you find out how many correct vs. wrong you were (e.g. 16/20 correct if you guessed correctly at 16 out of 20 people).

## Grading criteria

### Approved
- Follows the structure as mentioned above
- The original array remains unchanged
- Shows results with number of correct and total number of questions (e.g. 16/20 correct if you got 16 correct out of 20 questions).

### Well Approved
- Using Array Filter and Array Map.
- Randomize the order images come in (even between game rounds).
- Be able to restart the game.
- Show which ones were guessed wrong and which was the correct answer.
- Keep track of the latest results and with each new guess show whether you improved or worsened this time.
