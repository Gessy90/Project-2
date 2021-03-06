# WDI-Project2
# General Assembly Project 2 : React 2 days Hackathon

### Timeframe
  2 days

## Technologies used
* JavaScript (ES6) / HTML5 / CSS
* Bulma
* React.js 
* Express
* Babel
* Insomnia
* Heroku
* GitHub / Git

## My Application - Discover Coding Schools
![Logo](https://user-images.githubusercontent.com/42389173/54768542-4a799c80-4bf7-11e9-9251-3a69bd9e8b3f.png)
A live version of this site can be found on Heroku: https://reactproapi.herokuapp.com/

### App overview
This is a website where students can find all coding schools in the UK. When selected the relevant school you will be able to see a Languages Taught, Description, Contact, Address and you can visit their website by clicking on the Go To Website button.

## Process
The starting point in this project was to find an API that we could start using straight away. Since it was only a two day project, we had no time to be waiting around for verification.

Once we found this on code.org, we started to test it out on Insomnia to see how the response data was structured and what bits of information we could use in our site. Once we had a good idea of what the response data looked like, we drew up some wireframes so we could visualise how this data would be displayed on the page.

The next day we started to work on the code. The first thing we did was set up to webpack and index.js file so we could test the file was up and running correctly. We then started to build out the React part of the app which include a mixture of functional and classical components.

Using componentDidMount, we made an Axios request to the code.org API and set the response data on our state. We did this in our SchoolsIndex component and passed the data through to our SchoolCard component. To enable a user to search for a specific school, we incorporated the search into a second axios request which would then give us only coding schools in UK.

The SchoolsShow component made a fresh axios request incorporating the props passed to it. This enabled us to display specific information about the school and pass that infomation into a map component, which would be displaed on this page. The map component was made using Mapbox. We also added two buttons one that takes you to the schol's website and the otherone which will take you back to the SchoolsIndex.

## Challenges
The first big challenge was when we had to filter the data by countries since in the API there was a list of over 5000 schools in the world and we only wanted the ones in the UK. 
![Insomnia](https://user-images.githubusercontent.com/42389173/54770094-79454200-4bfa-11e9-929e-449850b32f92.png)
Another problem was that in the API there are no images/logos of the schools so we had to add few in CSS which took a while.
![Images](https://user-images.githubusercontent.com/42389173/54770352-f1136c80-4bfa-11e9-97c8-23720567af10.png)
One thing that I've learned by making this website is that next time we need to spend more time in searching for a good API that will give us more information instead of us adding it manually also becase we had only two days to build it.

### Wins
It was great seeing how much can be achieved in only a day and a half of coding and it was also the first time we had used React in an independent project.
Using Bulma made the styling very easy even if we didn't have enough time to complete everything properly. 
One great feature is that you can filter down your search by location.
![Search By City](https://user-images.githubusercontent.com/42389173/54771309-e1952300-4bfc-11e9-8373-80a779ede4f9.png)

![Search Form](https://user-images.githubusercontent.com/42389173/54771655-a3e4ca00-4bfd-11e9-908b-64b019c53478.png)

I'm also very proud that we managed to filter all the schools so that we would be able to get a list of coding schools in UK only.
![Filtering By Country](https://user-images.githubusercontent.com/42389173/54771753-d42c6880-4bfd-11e9-913f-c844b7b6d36f.png)
  

## Future features
If we had more time we would've liked to have the website mobile responsive and I would love to add more image/logo for the different schools. It would be nice to add all the contact info on all the schools but this is a field that it's not always given by the API.
