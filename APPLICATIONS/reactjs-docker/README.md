# Reactjs Docker 

--- 

### To Generate the application 
* $ create-react-app reactjs-docker


### o install dependent lib
* $ npm install node-gyp --save
* $ npm install typescript --save
* $ npm install bootstrap jquery popper.js --save

### import the bootstrap in index.js
* proj/src/index.js
* add below import statement in index.js
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
```

### To Build 
* npm run build 

### To start the applicatoin 
* npm start 


## Docker Exeuction 
* docker build . -t reactjs-docker

* docker image ls
* docker image rm -f <'imageid'>

* $ docker run -p 3000:3000 reactjs-docker

### ssh to the docker container 
* docker ps
* docker exec -it <'containerid'> sh 

* docker ps -a 
* docker stop <'docker-container-id'>

## Docker Compose Execution 
* docker-compose up 

### application url 
* http://localhost:3000/

### Docker Execution 
* docker-compose down 
