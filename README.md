# Conditional-Rendering-React

This Node/React app will help you gain a better understanding on how conditional rendering works.

# Getting started
    
    1: git clone https://github.com/RonnieGurr/Conditional-Rendering-React.git.
    2: cd Conditional-Rendering-React/.
    3: npm install.
    4: npm start.
    5: Open a new Terminal and cd into the API folder and start the api.js file with Node JS.

# How it works

    1: index.js calls the App.js component and passes it a prop called dataType.
    2: in App.js we have a component class that starts with a state of loading set to true.
    3: in the function componentDidMount() we call a function that we have in a different component
    called loadData and we pass it the dataType prop. This function makes a GET request using Axios,
    if the call works it will return the response, once we have the response we need to do something 
    with the data so we first check to see what was returned, if the GET request failed it will return
    a string containing 'Error' so the first thing we check is to see if the request worked and we do 
    this by using a simple if statement: if (response === 'Error') this would indicate that the API is
    refusing a connection or is down. Next we check that the route called exsist if the route or 
    dataType prop dose not exsist in the API it will return a object containing a errorCode and message.
    Lastly if everything works we will set the state using this.setState(), if we get this far we save 
    the response in the state and change the loading state to false to indicate the page is no longer loading.
    4: In the render method you can use JS to check on data in the state and return JSX based on the result.

    ```javascript
          componentDidMount() {

          }
    ```
