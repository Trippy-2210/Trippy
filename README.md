# Trippy

# Description

Trippy is a travel-based social media application that creates an avenue for the community to find companions who share the common interest of traveling using Next.js, Node, and Socket.io. This project was created by a team of 7 using agile methodolgies.

# Demo
demo link

# Features
• User authentication: New users will be required to create an account before they are able to use the website and see the trips of others. Users must be logged into the website in order to navigate through the rest of the pages. Upon account creation, users will be able to create their own profile page. Our user database will be designed to be secure, while at the same time giving the website owners easy access to a list of our user’s email addresses for use in any future possible email campaigns / account recovery.

• Profile page: Users will be able to view their own profile and the profile of others in order to give users insight into their potential travel partners. Users will be able to see other users’ first name (last name will be shown to other users if a connection is made), bio, interests, bucket list, and trips that user has created. Users will also have the ability to edit their own profiles.

• Home page: The main content of the home page will be a list of trips created by other users, where each trip will be represented by a card that displays a user-uploaded photo, trip title, destination, and dates. The user will be able to search trips by destination and filter the list by budget and date. Upon clicking on a trip, the user will be taken  to the corresponding trip detail page. Also on the homepage will be a list of trips the user has either created or joined. 

• Trip detail page: This page will present users with additional information about the trip including budget, planned activities, and a list of users who have joined the trip. If interested, a user can request to join the trip from this page. The creator/owner of the trip will be presented with a list of users who have requested to join the trip and they will be able to accept/deny requests. 

• Create trip page: The main content of the trip creation page will be a form prompting the user for information about their trip including destination, dates, and budget. To facilitate differentiation between trips with the same destination, users will also be asked to give a fun/interesting title for their trip, a photo, and a list of potential activities.

• Messages page: Upon clicking the message page, the page will display ‘No current trips’ if the user has no current trips, and if the user has a trip(s), trips will be displayed on the left side of the page in a list. When a user clicks on a trip, that group chat will be centered and take a majority of the page. On the right side of the page, there will be an interface allowing you to view users in the chat and interact with some of the more advanced features.

# Authors
[Aaron Mikulka](https://github.com/amikulka)

[Ben Stemen](https://github.com/bdstemen)

[Haillie Willoughby](https://github.com/letmeeatbrioche)

[Julian Mclendon](https://github.com/jkmclendon)

[Luke Anger](https://github.com/LukeAnger)

[Ryan Anger](https://github.com/ryananger)

[Stephen Chong](https://github.com/chongstephen)


## Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


## Developer Tools
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)



## Installation & Use
1. Clone the repo
    ```
    git clone https://github.com/Trippy-2210/Trippy.git
    ```
2. Install all required packages
    ```
    npm install
    ```
3. Rename `.env.local.example` to `.env`
4. Create all necessry API tokens and insert into `.env`
5. Start the dev server
   ```
   npm run dev
   ```
6. Navigate to localhost:3000
