# Conditional-Rendering-React

This Node/React app will help you gain a better understanding on how conditional rendering works.

# Getting started
    
    1: git clone https://github.com/RonnieGurr/Conditional-Rendering-React.git.
    2: cd Conditional-Rendering-React/.
    3: npm install.
    4: npm start.
    5: Open a new Terminal and cd into the API folder and start the api.js file with Node JS.

# How it works

    1: The parent component calls the child component passing a prop called dataType.
    2: the child component is a React class meaning we can use state, in the constructor method
    we use this.state = {} to set a loading equal to true
    3: Once the component has rendered it will call componentDidMount(), this will fetch the data
    then update the state using this.setState(), when it calls this we update loading to be false
    and saves response into data
    4: Because the state has changed it will re-run the render method and re-run the if statements
    and now as the loading state is false it and data has been set it will render the data and not 
    the loading screen.

```javascript
    componentDidMount() {
        //This function will run everytime the component has rendered
    }
```