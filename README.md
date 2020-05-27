## The Creative Design Process

### DAY 1

After I read the task description,

I found myself seaching for [pizza pictures](https://www.pexels.com/search/pizza/) I could use in the app.

I decided I'll spend an hour drawing some wireframes in Procreate to get my ideas down to something clear and implementable given the timeframe (I don't want to spend too much tweaking and fixing UI on the development process, for me that's often a bad idea).

Ok, this is what came up from the sketch session:

![Mobile Sketch](docs/images/mobile-sketch.jpg "Mobile")
![Desktop Sketch](docs/images/desktop-sketch.jpg "Desktop")

#### Hands to work

### Stack

As per the recomendations, I've choosen the following stack to create the Front End experience:

- React.js (for quick boilerplate create-react-app)

I've commited some components to get a file architecture in place and their correspondent tests files, all empty of course, but just for now ;)

- Tailwind (https://tailwindcss.com/)

### DAY 2

Took me 1 day to implement the responsive styles of the app.

I'll implement mobile swipe version when I get to a stable version.

Here is the result:

![Desktop App](docs/images/pizza-task-desktop-0.1.png "Desktop App")

After a little tweaking I've decided to stick to the sketchs, will add the (-) button to the side of the (Add) to remove one pizza at the time.

# DAY 3/4

Most of this days was implementation of the logic and some cool stuff with react Hooks.

The Cart and Checkout is set on place now, components make use of the cart context using the React reducer, pretty much as the same as if it where redux, but without redux.

Dediced to change "Quick Order" for "Pizzas Menu". I saw myself using the unimplemented "Quick Order" button to return home so I think it was serving other purpose, now the button takes you to the menu.

There are some stuff that can improve and will soon, for example I calculate subtotalPrice and count in several places now, that needs to go DRY soon.
I intend to add the **currency change** feature before getting into the cleaning.

**Even though, in a real world app I'd add the "Cookies Acceptance" prompt**, I've made use of localStorage to save addresses.

I don't have server yet so I've been using mocked services, I hope to start with BE tomorrow.

### Stack

React create app is ok for development, but I need to push this into production ready environment.

- Docker / Docker-Compose

  With Docker we will have a working testing/ build station. With Docker Compose it is easy to launch.

- Nginx (Server/ Routing)

  React Create App dev server lets you add in app routing and use it right away, but I'll need to add some configuration to proxy the routes into "/" so the user does get to use direct urls without making it look bad.

- Nightwatch

  Integration Tests running in playwright are in my opinion a good choise once you reach a stable version, you can iterate with the confort of tests that prove every feature of the app.

# DAY 5

## Starting BackEnd

I've decided to give Laravel a try, I must say I've never used Laravel and it will be my 2nd time using php (Magento) and perhaps it is better that I expect.
