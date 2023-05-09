# Todo List Assignment

The task was made using React and base in Typescript, thus there are two neccessary commands to start the app. 

### `npm install`

### `npm start`

# Front End 

The app frontend is developed in React paired with a couple of different libraries to make the app more scalable and easier to manage when it comes to certain parts of front end development. We have used purely functional components in this app and we try staying that way even when using third party libraries since all of them offer out of the box hooks.

## File structure

### Conatiners
Inside this folder we place the container for a specific view( or page depending on the naming). Inside this container most of the time we will have just a small component that connects two or 3 main smaller components and creates the view.

### Components
This folder contains our purest components that are essential for building everything on our app. In most cases all our inputs, buttons, wrappers and other things will have to be put here. This will not contain anything more than

### Store
Right here we create our Context API and we configure it with all the necessary hooks, interfaces, states and functions. It is a pretty simple setup but centralized in this one single place so that we don't have our setup everywhere in our folder structure.

### Types
Here we put all our object types/interfaces since we are using typescript and we don't want to use any for our variable and function typing(Only in rare cases where we use any as a type of generic so that the function can be dynamic)

### Testing

All our tests should be written next to the file as such <file_name>.test.ts. We do this so that we have an easier time finding tests for our code since doing a seperate directory and trying to mimic the folder structure 1 to 1 is a really tough job and makes it confusing for everyone. We use React Testing Library and jest as a default framework for testing.

#### `npm run test`
This command will run all the tests and will start watch mode, so any change you make it will automaticlly run all of the tests.