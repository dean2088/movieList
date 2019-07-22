1. Setup/installation instructions
    1. macOs
    2. node version: v10
    3. npm install
    4. npm run start
    5. npm run build
    6. npm run test
    7. npm run test:update (update snapshots)

2. A quick (1 page) description of your solution

    1. In this test, I try to build reusable components
    2. For the WeatherCard, I use the functional component to build it because it only display props
    3. I use sass to write the css and use flex-box to handle the structure of the ui
    4. click "DEMO Streaming" could go to home page

3. testing

    1. test the default component structure of the ui, for example how many Input components inside the Weather component
    2. test the component structure changes when given different props or state.
    3. test the props method and see after some procedure the method can receive correct args, for example, test the
     onChange method in the Input component, when the input's value is change, is the onChange method being trigger and
     get the input's value
    4. test the snapshots
