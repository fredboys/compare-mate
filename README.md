# Compare Mate

Compare mate is a photo sharing platform where users can see deals on products that are available online or instore that other users have posted. Users can register an account and upload products with a all required details about the product. Users can Upvote, favourite and comment on the products to build a little community.

![Responsive mock up](/readme/comparemate-webmock.jpg)

# Live Site

[Compare Mate](https://compare-mate.herokuapp.com/)

# Content

* [Site Goals](#site-goals)
* [Agile Methodology](#agile-methodology)
    * [User Stories](#user-stories)
    * [Project Board](#project-board)
    * [Wireframes](#wireframes)
* [Features](#features)
    * [Navigation Bar](#navigation-bar)
    * [Sign Up](#sign-up)
    * [Sign In](#sign-in)
    * [Home Page content](#home-page-content)
    * [Contact Form](#contact-form)
    * [Image Carousel](#image-carousel)
    * [Feed Page](#feed)
    * [Favourite Page](#favourite)
    * [Profile](#profile)
    * [Add Product](#add-product)
    * [Product Page](#product-page)
    * [Up Vote](#up-vote)
    * [Favourite button](#favourite-button)
    * [Comment](#comment)
    * [Trending Products](#tranding-products)
    * [Filter](#filter)
    * [404 Page](#404-page)
    * [Future Features](#future-features)
* [Testing](#testing)
    * [Lighthouse](#lighthouse)
    * [CSS Validator](#css-validator)
    * [Eslint](#eslint)
    * [Responsive](#responsive)
    * [Manual](#manual)
* [Security Features](#security-features)
* [Bugs](#bugs)
    * [Solved](#solved)
    * [Left to solve](#left-to-solve)
* [Technology Used](#technology-used)
* [Packages](#packages)
* [Deployment](#deployment)
    * [Heroku](#heroku)
    * [Locally](#locally)
    * [Fork](#fork)
* [Credits](#credits)
    * [Code](#code)
    * [Acknowledgements](#acknowledgements)


# Site Goals

Compare mate was built to build a community of shoppers and help everyone find great deals on products they love. The site allows users to easily navigate and search for potential products they are interested in. Site comes with a range of features from commenting to favouriting products.

# Agile Methodology

By using AGILE methodology in this project I was able to deliver a site which had all required functionality and was able to give even more extra detail when going through the project. It had been done by delivering small features in incremental sprints. This was done with a tight deadline only being less then a month away.

## User Stories 

As a user: 

* I can view a navbar from every page so that I can navigate easily between pages
* I can navigate through pages quickly so that I can view content seamlessly without page refresh
* I can create a new account so that I can access all the features for signed up users
* I can sign in to the app so that I can access functionality for logged in users
* I can tell if I am logged in or not so that I can log in if I need to
* I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
* When logged out I can see sign in and sign up options so that I can sign in/sign up
* When logged in I can create posts so that I can share my product deals
* I can view the details of a single product post so that I can learn more about it
* When logged in I can Up Vote a product so that I can show my support for the product posts that interest me
* When logged in I can favourite a product so that I save it for later if I want to come back
* I can view all the most recent product posts, ordered by most recently created first so that I am up to date with the newest content
* I can search for products by category, so that I can find the products I am most interested in.
* I can search for products by keyword, so that I can find the products I am most interested in.
* I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"
* When logged in I can add comments to a post so that I can share my thoughts about the post
* When logged in I can view comments to a post so that I can see others thoughts about the post
* When I'm a post owner I can edit my product name, description, price, location, link, category so that I can make corrections or update my post after it was created
* When I'm a owner of a post I can delete my post so that I can control removal of my post from the application
* When I'm a owner of a comment I can delete my comment so that I can control removal of my comment from the application
* I can see a list of the trending products so that I can see which products are popular
* I can view statistics about my profile: number of posts, number of votes received and number of favourites received
* When logged in I can edit my profile so that I can change my profile picture and bio
* When logged in I can update my username and password so that I can change my display name and keep my profile secure
* I can contact the site admin so that I can report any problems are bugs I find

## Project Board

Githubs projects was used to track user stories and implement ideas based on their level of importance for allowing use of the app with no loss of functionality or user experience. Two labels were created indicating their level of importance, those were:

* Must Have 
* Should Have

I used GitHub projects board to create the user stories and keep track of my tasks. Here is the link to my board - [Project Board Link](https://github.com/users/fredboys/projects/12/views/1)

Here is also a screenshot overview

![Project Board](/readme/comparemate-board.jpg)

## Wireframes

I built these wireframes with balsamiq to help me get a design ready for the website. The final website may look different form the inital wireframes.

Home page when a user is logged out -

![Logged out wireframe](/readme/homepage-loggedout-cm.jpg)

Home page when a user is logged in -

![Logged In wireframe](/readme/homepage-loggedin-cm.jpg)

Feed page and Favourite -

![Feed Page](/readme/ProductPage-cm.jpg)

Profile Page -

![Profile Page](/readme/Profilepage-cm.jpg)

Add Product Page -

![Add product page](/readme/Createproduct-cm.jpg)

Sign In -

![Sign in](/readme/Signin-cm.jpg)

Sign Up -

![Sign Up](/readme/Signup-cm.jpg)

Contact Page - 

![Contact](/readme/Contact-cm.jpg)

# Features

## Navigation bar

This is the navigation bar when a user is logged in. It allows the user to access all parts of the webpage with just a single click. It has a nice contrasting colour between the background colour and the text colour. When the user hovers over the text and icons, there will be a change in colour which will notify the user that it is a clickable link. When already on a page, the icon for that page will stay highlighted.

![Navigation bar](/readme/navbar-in.jpg)

This is the navigation bar when a user is logged out. All aspects of the nav bar are the same apart from where the user can go. Only the home, sign in and sign up pages.

![Navigation bar logged out](/readme/navbar-out.jpg)

This is the navigation bar when in smaller screen sizes. The links get contained in a burger menu which produces a really clean design.

![Navbar mobile](/readme/navbar-mobile.jpg)

## Sign In

This is the sign in form. The user gets taken to this page after they click the sign in link or after they register an account. The user in prompted with 2 simple inputs to sign in with. The user gets error feedback if they enter the incorrect inputs. There is also a link to the sign up page if thats where they need to go.

![Sign in page](/readme/signin-feature.jpg)

## Sign Up

This is the sign up form. The user gets taken to this page after they click the sign up link. The user in prompted with 3 simple inputs to sign up with. The user gets error feedback if they enter inputs that dont meet the requirements. There is also a link to the sign in page if thats where they need to go.

## Home Page Content

This is the home page for logged in users. They are greeted with a message and two simple buttons. A feed button to take the user to the feed page to view all products and a contact button too contact the site owners. Also there is a image carousel which displays the trending products on the website. The user can easily navigate the page as its a clean, simple but effective layout. Its straight to the point and easily understandable.

![Home page](/readme/home-feature.jpg)

This is the home page when logged out. It has the same layout with different greeting messages and buttons. These buttons direct the user to the neccessary pages to begin accessing the full site.

![Home page logged out](/readme/homeout-feature.jpg)

## Contact Form

This is the contact form page. From here users are given 2 simple inputs for them to fill out if they would like to contact the site owner. The cancel button will cancel their inputs and the send button will send their message.

![Contact form](/readme/contact-feature.jpg)

## Image carousel

This is a image carousel. This displays the top 6 trending products across the site. They are determined by the amount of votes they have recieved on their post.

![Image carousel](/readme/carousel-feature.jpg)

# Testing

## Lighthouse

The application has been tested with Chrome Dev Tools Lighthouse Testing which tests the application for:

* Performance
* Accessibility
* Best Practices
* SEO

On some pages the performace score was slightly low however this is to be expected with so many images. This could be improved in the future by compressing images before uploading them. Unfortunately, I did not have time to implement this functionality in this iteration.

## Home Page

![Home page lighthouse](/readme/lighthouse-home.jpg)

## Feed Page

![Feed Page lighthouse](/readme/lighthouse-feed.jpg)

## Favourite Page

![Favourite Page lighthouse](/readme/lighthouse-favourite.jpg)

## Profile Page

![Profile Page lighthouse](/readme/lighthouse-profile.jpg)

## Contact Page

![Contact page lighthouse](/readme/lighthouse-contact.jpg)

## Create Product Page

![Creat product page](/readme/lighthouse-product.jpg)

## Product Page

![Product Page](/readme/lighthouse-productpage.jpg)

## CSS Validator

When running my CSS code through the [CSS Validation](https://jigsaw.w3.org/css-validator/) service I had no bugs.

![CSS Validator](/readme/cssvalidator.jpg)

## Eslint

Eslint was installed and configured locally. No problems were detected in the Problems tab of the terminal when going through the JS files

## JSHint

JSHint was used to test my JavaScript files. When run there was no errors. Warnings were shown but they were only to do with missing semi colons. All of these warnings have been fixed. The other warnings were to do with ES versions which is not an issue and have been ignored.

![JSHint validator example](/readme/comparemate-jshint.jpg)

## Responsive

All pages have been tested for responsiveness using chrome dev tools. I have checked all pages at all key breakpoints to make sure the layout remains user friendly and nothing clashes.

## Manual

I manually tested all buttons, forms and links to make sure the correct action took place. Here are tables to show the testing

### Nav Bar when logged out

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| Logo   | Takes you to the home page | PASS |
| sign in link   |  Takes you to the sign in page  |   PASS |
| sign up link   | Takes you to the sign up page |    PASS |

### Nav Bar when logged in

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| Logo   | Takes you to the home page | PASS |
| add product   |  Takes you to the create product form  |   PASS |
| feed   | Takes you to the feed page |    PASS |
| favourite   | Takes you to the favourite page |    PASS |
| sign out   | sign out user and goes home page |    PASS |
| profile   | Takes you to the profile page |    PASS |

### Home page when logged out

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| sign in button   | Takes you to the sign in page | PASS |
| sign up button   |  Takes you to the sign sign up page  |   PASS |

### Home page when logged in

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| feed button   | Takes you to the feed page | PASS |
| contact   |  Takes you to the contact  |   PASS |

### Add product form

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| image   | uploads image preview | PASS |
| name   |  types input out  |   PASS |
| link   | types input out |    PASS |
| location   | types input out |    PASS |
| price   | types input out |    PASS |
| category   | dropdown works |    PASS |
| cancel button   | removes all input |    PASS |
| post button   | posts product to feed |    PASS |

### Feed Page

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| search keyword filter   | filter out products from input | PASS |
| category filter   |  filter out product by category  |   PASS |
| profile image   | takes you to the product page |    PASS |
| favourite button   | increases increment and adds to favourite |    PASS |
| comment button   | opens product page and allows to comment |    PASS |
| vote button   | increases increment and highlights |    PASS |
| cancel button   | removes all input |    PASS |
| trending product image   | takes you to the product page |    PASS |

### Favourite Page

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| search keyword filter   | filter out products from input | PASS |
| category filter   |  filter out product by category  |   PASS |
| profile image   | takes you to the product page |    PASS |
| favourite button   | increases increment and adds to favourite |    PASS |
| comment button   | opens product page and allows to comment |    PASS |
| vote button   | increases increment and highlights |    PASS |
| cancel button   | removes all input |    PASS |
| trending product image   | takes you to the product page |    PASS |

### Profile page

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| three dots   | opens dropdown choice | PASS |
| edit profile button   |  Takes you to the edit profile page  |   PASS |
| username button  | allows you to change username | PASS |
| password button   |  allows you to change password  |   PASS |
| product image   |  takes you to product page  |   PASS |

### Product page

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| three dots   | opens dropdown choice | PASS |
| edit button   |  Takes you to the edit product page  |   PASS |
| delete button  | deletes the product | PASS |
| comment input   |  allows you to write comment  |   PASS |
| post button   |  posts comment to feed  |   PASS |

### Comment section

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| three dots   | opens dropdown choice | PASS |
| edit button   |  Allows you to edit comment  |   PASS |
| delete button  | allows you to delete comment | PASS |
| cancel button   |  cancel changes  |   PASS |
| save button   |  update comment  |   PASS |

### Contact form

| What is being tested |  Whats supposed to happen  | Pass/Fail |
|:-----|:--------:|------:|
| reason input   | allow user to write input | PASS |
| details input   |  Allow user to write input  |   PASS |
| cancel button  | allows you to cancel input | PASS |
| send button   |  sends contact form  |   PASS |


# Security Features

* Users can not deduce any urls that is not related to their profile. They will get a custom 404 Not Found page.

* Error messages for incorrect inputs on product create form

* Error messages for incorrect inputs on sign in/sign up form

# Bugs

## Solved

A bug I found through testing was I didnt use the correct attribute when defining the model class for the product. I originally used an IntegerField, which meant the user could enter a decimal if the price was a round number. This was an easy fix as I just had to change it to a DecimalField and set the decimal_places to 2.

Another bug I encountered was when I was working on my category search. I had the wrong query search in the URL where I was fetching the data from. It needed to be '&category_type=${category}'. This was causing the category filter to not work correctly as it was filtering by name, description and category. I needed just category.

## Left to solve

There are no current bugs I have found at the time of testing

# Technology Used

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Eslint
    * Linting tool used in order to check best practice coding standards
* Heroku
    * Used for application hosting
* ReactBootstrap
    * Used for styling
* Git
    * Version control software
* Github
    * Repository used to store base code and docs

# Packages

* "axios": "^0.21.4",
* "bootstrap": "^4.6.0",
* "jwt-decode": "^3.1.2",
* "react": "^17.0.2",
* "react-bootstrap": "^1.6.3",
* "react-dom": "^17.0.2",
* "react-infinite-scroll-component": "^6.1.0",
* "react-responsive-carousel": "3.2.21",
* "react-router-dom": "^5.3.0",
* "react-scripts": "^4.0.3",
* "web-vitals": "^1.1.2",
* "eslint": "^7.32.0",

# Deployment 

## Heroku

* The site was deployed to Heroku. The steps to deploy are as follows:
* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue
* Click the deploy tab
* Scroll down to Connect to GitHub and sign in / authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy

## Locally

Navigate to the GitHub Repository you want to clone to use locally:

* Click on the code drop down button
* Click on HTTPS
* Copy the repository link to the clipboard
* Open your IDE of choice (git must be installed for the next steps)
* Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

* nvm install 16
* nvm use 16

Run Application:

* npm start

## Fork 

* Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.
* Navigate to the GitHub Repository you want to fork.
* On the top right of the page under the header, click the fork button.
* This will create a duplicate of the full project in your GitHub Repository.

# Credits

## Code 

Image carousel for the home page was created with help using - [React responsice carousel](https://www.npmjs.com/package/react-responsive-carousel?fbclid=IwAR1lRdK_fVD_9qm55QXE0KN7H4yUqw_cLnSUv5_zk9QRIwriizKYC5KZWj8)


## Acknowledgements

Thank you to myy mentor Daisy for helping me along the way and tutor support team