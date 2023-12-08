### Prerequisites to run Back-end 



Ensure that you have the following installed on your machine:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Apache Maven](https://maven.apache.org/download.cgi)

## Installation

   1. Clone the repository:
 # git clone  https://github.com/C19473194/fyp
 2. Switch to develop branch:
   # git checkout develop
3.Navigate to the project directory:
   # cd your-repo
4.Build the project using Maven:
  # mvn clean install
5.Running the Application
In the project directory, you can run the application using Maven:
 # mvn spring-boot:run

#Setup Database 
This repository contains Docker configuration to set up a database using Docker containers and run SQL scripts.


## Prerequisites

Ensure that you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)

## Installation

1. Clone the repositoryif not already cloned 
2.Navigate to the project directory:
   cd your-repo

3.Edit the yml file to add your prefered user name, email and password 
3.Running the Docker ContainerBuild and run the Docker container:

   # docker-compose up -d
This command will create and start the Docker containers defined in the docker-compose.yml file.


### Prerequisites to run front-end 

- Node.js and npm installed on your machine.

### Installation


1. if you already have cloned the repo and checkout to develop branch  navigate to the project directory:
  # cd your-repo
2.Install dependencies:
  # npm install
3.In the project directory, you can run:
  # npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



