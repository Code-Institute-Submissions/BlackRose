
# Black Rose
> Home cooked meal recipes. 
This repo hosts the assets used to build the Black Rose website. A website focused on providing home cooks with exciting meal recipes.

### Background
Ever since I can remember, I've enjoyed cooking and sharing recipes with loved ones by stuffing their faces with food I made. I've
always envisioned owning a cozy cafe or trattoria like kind of restaurant some day in the future, that would serve breakfast, lunch and 
early dinner, however the uniqueness of it would come down to the menu i would offer. The menu would only contain recipes I have self-made 
or created by myself over the years that I've had stored in a old manuscript book, the menu would not contain regular meals served in common restaurants
today, and because of that the name "BlackRose" is what I would call it.

A black rose is technically a very dark shade of red, purple or maroon, it's color can be deepened by adding black ink to water in vase. I would say 
unlike any other rose, it is unlikely, unusual and definitely a hidden gem, which is the similar idea I'v always had for my little restaurant
it would be a hidden gem for many to find wholesome meals and experience a sense of home. 

Given that my BlackRose restaurant dream is yet to be realised, I present to you BlackRose the website, it will serve as a way to still share
my self-made recipes with everyone not just my loved one until such a time that I can make these meals for the general public, it will also 
serve as an upgrade or civilised version of my old manuscript book, and hopefully one I won't be able to lose, as I've done before with the old.

And lets not forget BlackRose is also because I consider myself to be a rose and because I'm a black woman the idea of a black rose
resonates more with me.

BlackRose recipe site is not your regular recipe website, the only recipes to be found are those made by me, I'll not be instructing on how to 
pouch an egg, you should already have the skills to.

### Demo 
A live demo can be found here [here](https://honey20103.github.io/BlackRose/)

[Home iPhone](https://github.com/Honey20103/BlackRose/blob/master/wireframes/UXdemo/homepageiphone.png)

[Home iPad](https://github.com/Honey20103/BlackRose/blob/master/wireframes/UXdemo/ipadviewhomepage.png)

[Recipe iPhone](https://github.com/Honey20103/BlackRose/blob/master/wireframes/UXdemo/iphoneviewrecipe.png)

[Recipe iPad](https://github.com/Honey20103/BlackRose/blob/master/wireframes/UXdemo/ipadviewrecipe.png)

[Form iPhone](https://github.com/Honey20103/BlackRose/blob/master/wireframes/UXdemo/formview.png)



## UX

### User stories
- As a subscriber looking for inspiration on a home cooked meal,
while battling busy schedules and family life, I would like to easily read a recipe.

- I often struggle to cut down the measurements of ingredients for a recipe that serves more than
one person. I would like the ability to reduce the serving number and automatically provide the
correct measurements.

- I hardly cook without a recipe, and when I do I never know what to pair certain foods with, 
I would appreciate a recipe that has an entire meal documented.

- As a user what if I would like to find a similar meal around or near me, because I might to feel like cooking 
today?

- As a user I would like the ability to online purchase the ingredients I need for the recipe, and
not have to worry about writing a list and going to my local grocery store.

- I'm new to cooking, I often have no idea what some of the ingredients are or what they look like,
often making it a mission for me to locate in a grocery store.

### Strategy
My goal in the design was to make it as easy as possible for users searching for recipes to 
have a clean look with no clutter or information over load by having a user-friendly and minimalist
design.

### Scope
For the users i wanted to provide them with easy to read recipes that I have created, in a way lessen the need to go over a 1000 recipes to find on to ultimately make.

### Structure
The menu easily provides the quick glimpse of what recipes are available to their disposal.

### Skeleton
[Home wireframe](https://github.com/Honey20103/BlackRose/blob/master/wireframes/HomePage.png)

[Recipe wireframe](https://github.com/Honey20103/BlackRose/blob/master/wireframes/RecipePage.png)



### Surface
The black and nude scale color scheme was chosen to reflect the background of the name/story and create a sleek and modern feel. I wanted a user to have a sense of calm and ease as they 
navigated the pages.

## Project Setup 

### Clone project:

```shell
$ git clone https://github.com/Honey20103/BlackRose.git
```

## Features

- Ability to translate the recipe to whatever the native language the user best understands
- Ability to chnage ingredients per serving, function available however not linked to Ingredients therefore did not achieve user story expectations

## Future Features

- Future Google Maps JavaScript & Google Places API integration to enable users to search for nearby within 5km radius for restaurant that 
  might serve similar dishes, I have included my maps API key, and and javacript to call the api to google maps javascript api, however I did not manage to get it working, I have commented out the ID in html.
- 

## Technologies
1. HTML
2. CSS
3. Bootstrap 
4. Javascript
5. API's

## Testing
This site was manually tested through trial and error to ensure compatibility and responsiveness, as seen in my Git version control. However, towards the end I decided to make use of availabe online validators or code testeers i.e, http://csslint.net/ for my style.css sheet, https://www.responsinator.com/ to observe my 
website responsivesnes and compatibility on multiple mobile devices in both landscape and portrait (iPhone 6-8, iPad and Android) I realised while the homepage looked fine on all devices, the recipe pages Container-fluid section was not responsive, containers did not overlapped as expected on the breakpoints(Ive fixed this), https://www.freeformatter.com/ html validator which helped me with a few linter issues in my HTML code and learned that due to more than two consecutive hyphens in my comment labels or dividers XML 1.0 doesn't approve the document I've changed that to use asterisks instead, minor issue, http://browsershots.org/ to complete a compatibility test on web browsers and lastly I used http://www.jslint.com/ to test my javascript scripts results for most showed undeclared variables, suggestions to switch single quotes for use of double quotes and other minor issues, which i had fixed. 

If you try to submit the connect/share form without filling in the email fields and name, there will be an error noting the invalid. Furthermore, the 'required' attribute is added to the 'name,' 'email,' and 'image upload' field, so if those fields are not filled in, it's not supposed to submit the form, however in my case it does, because realised quite late that I cannot have two functions called on the 'onsubmit' event, i struggled to figure out how to best nest my two functions the field validation check and email send with emailjs, I resorted to leaving at is due to time contraints and requirements, and therefore on the click submit "Share" eventhough my validation check script works, a user could click the submit button with empty fields and it would send an email via the emailjs API call, on submit fields clear too, however validation script runs anyway, I understand that the use of Jasmine for testing would have helped best structure my scripts i used the console to ensure success of email sent. 



## Deployment 
This site is hosted using GitHub pages, deployed directly from the master branch. 
The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/Honey20103/BlackRose.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.


## Credits

### Content
The content on the site is derived from my self-made manuscript recipes book. 

### Media 
All background photos were taken from https://www.pexels.com/, a stock image library.
Images of the recipes were taken by myself.

### Acknowledgements
The validation field javascript for esuring validation on form fields are completed by user, I significantly modified to fit the script to suit my form. The I found the code from Codepen.





