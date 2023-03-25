To start do: npm start, then viw in brwser at (http://localhost:8000/)
# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT                           | Port for running on localhost       | "8000"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies (follwing command will install all dependecies as in package.json file)
```
cd <project_name>
npm install 
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8000`


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **assets**               | contains asset file for frontend css& js  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **uploads**              | Contains  csv files uploaded by user                                                      |
| **config**               | Application configuration including environment-specific configs 
| **controllers**          | Controllers define functions to serve various express routes.Contains show Csv controller 
| **routes**               | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| ** **/index.ss           | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts] 


## functionality
sign,signup for  user, 
create session, logout
add csv files,
view csv files as table
search filter based on column
sort clumn
pagination

<br>
![home page](https://user-images.githubusercontent.com/89533221/227739475-4c530eef-012b-43d2-9068-734d8012227a.JPG)

<br> <h2>view files</h2>
![image](https://user-images.githubusercontent.com/89533221/227737513-4779caf4-ccc5-4159-9417-bf58af321e56.png)
<h2> search filter </h2>
![image](https://user-images.githubusercontent.com/89533221/227737655-4684f701-56b1-424a-9dd4-2d676be954b9.png)

![search filter](https://user-images.githubusercontent.com/89533221/227737757-b820ac07-20cb-4f33-9590-2a1ffdfa0086.JPG)
![search sort and pagination](https://user-images.githubusercontent.com/89533221/227739516-b5df0098-5357-48b6-9444-16673f17cffd.JPG)
