###### Application

In general the philosophy that this repository is following is to not use something unless there is a need for it. Also I try to use the minimal amount of external packages possible. It's also worth noting, that
as per react docs suggest, I don't split the components until needed.

For example:
1. Create one big component file called List.
2. Start with markup without functionality
3. Start adding components in the same file.
4. Start splitting when the need arises. (Make tests easier, need reusability etc)

Every file in this application is hand picked. I did not reuse `create-react-app`
as I wanted to have more control on each file.

Under the `infra` directory you can find the webpack.config.js file. It's a rather simple config
which is supposed to be extended when there is a need to.

For code quality, prettier, eslint are used and configured.

For testing, I have chosen to go down with a different path and use `cypress for component testing` which gives access to a real browser. I find this a really nice way to write tests as it allows the developer to visualize what is happening.
With `cypress open-ct` a browser opens to run tests.
It also supports running the tests in command line for integration with CI tools `cypress run-ct`

One sacrifice I made for this project was not to use Typescript which I find awesome but for speed of development I took this decision. I have used `prop-types` instead which provide some safety.

I added a lot of comments, which usually I would not add in a real world scenario.

I was hesitant to follow the Atomic Design principles, although I have read about it after finding about it in the job description, as I wanted to show how I usually structure my projects. But of course I'm open for any suggestions.  

For translations, due to time constraint I added only one example for Total Count. But the idea is there and is easily expandable to the other components

The project can be started and run with `yarn start`