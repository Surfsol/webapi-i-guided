# Notes
node - can run js outside of browswer
can be used to build web apps like react

index.js is your main file - npm run server connects to index.js

express helps you build web apps

api - define what you can access in application

.gitignore - to not commit certain files and dependencies to github

npx gitignore node

package.json - tell what dependencies to run
npm init -y

define names of commands inside script. 
"server": "nodemon index.js"

install 'nodemon' as a development dependency => 'npm i -D nodemon'

[client] == HTTP(requests, responses) == [api]

HTTP

-http methods (GET, POST, PUT, DELETE ...)
-http message
    - header
    - body (when send data, it is in body)
-request
-response

<!-- example: axios.get is a request -->
[client] makes a request to the [server/api]

<!-- api sees request and produces a response -->
[server] sends a response to the [client]

