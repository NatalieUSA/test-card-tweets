Test task: Goal: Create tweet cards and add interactivity at the click of a
button.

Performance criteria: -The layout is fixed in px, semantic and valid. -There are
no errors in the browser console. -The work is done on native JS using
assemblers or on React. -Interactivity works according to the terms of
reference. -The code is formatted and uncommented. -The repository should be
described in README.md.

Technical task:

1. According to the layout, you need to implement user cards.
2. When you click on the Follow button, the text changes to Following. The color
   of the button also changes. And yours is added to the number of followers.
   That is, the initial number is 100,500 followers.
3. When you click on the button, it will be 100,501. When the page is updated,
   the final result of the user's actions should be recorded. That is, if you
   click on the button and refresh the page, the button still remains in the
   Following state with the appropriate color, and the number of followers does
   NOT decrease to the initial value.
4. When you click the button again, its text and color change to their original
   state. The number of followers also changes. It decreases by 1 (100,500).
5. In the code, the number 100,500 must be written with one value (100500). In
   the UI, it is displayed with a comma (100,500).

   Create your personal backend for development using the mockapi.io UI service.
   Create a users resource. Use the resource constructor and describe the user
   object as described below.

User:

1. Create a user in Mockapi with the following fields: id, user, tweets,
   followers, avatar (see screenshot below).
2. Avatar images must be specified with separate urls in the “avatar” property.
   You can choose them yourself.
3. There should be from 12 users with different values (at your discretion) in
   the database. Make pagination. One pagination page should display at least 3
   tweets, the rest should be loaded when you click Load More.
4. The rest of the requirements are similar to the technical task described
   above.

Layout of the application project:
https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1

- Additional task

You will be awarded additional points for performance! Without completing an
additional task, you will not be able to get the maximum score.

Create routing using React Router.

The application must have the following routes. If the user entered by a
non-existent route, he must be redirected to the home page. '/' – Home
component, home page. Styling and design at your discretion '/tweets' -
component tweets, page with display of tweets The tweets page should have a Back
button that leads to the main page.

- Tasks with an asterisk

Add filtering. It should be a Dropdown with 3 options (design at your
discretion): show all, follow, followings show all - show all tweets. follow -
show tweets with follow status. followings - show tweets with following status

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
