# SE4A1-Projects
OS Lab end semester Jenkins project

## Jenkins Pipline

Jenkins, the heart of DevOps, is a continuous integration tool that allows developers to integrate code into a shared repository at regular intervals. 
The usual practice is to trigger a build as soon as the code is committed to the repository.
> Jenkins pipeline allows us to define a complete list of events that happen in the code lifecycle. Starting from the build, to testing and deployment. 


The common process of Jenkins involves the following 3 steps:

1. Developers make changes to the code and commit it to their repository
2. Jenkins picks up the code and later runs builds and any tests that may be required
3. As a post step, notifications can be triggered, logs can be checked, or any other cleaning job can take place

## Prerequisites

- Java

### Installing Java

    sudo apt update
    sudo apt install openjdk-11-jdk
    
### Verifying Installation

    java -version
  

## Defining a Jenkins pipeline
