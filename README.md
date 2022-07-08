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
    
### Installing Jenkins

The version of Jenkins included with the default Ubuntu packages is often behind the latest available version from the project itself. To ensure we have the latest fixes and features, we will use the project-maintained packages to install Jenkins.

First, add the repository key to the system:

    wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

After the key is added the system will return with OK.

Next, append the Debian package repository address to sources.list which maintains all repositories:

    sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
    
After both commands have been entered, we’ll run update so that apt will use the new repository.

    sudo apt update

Finally, we’ll install Jenkins and its dependencies.

    sudo apt install jenkins
    
### Starting Jenkins

Let’s start Jenkins by using systemctl:

    sudo systemctl start jenkins

Since systemctl doesn’t display status output, we’ll use the status command to verify that Jenkins started successfully:

    sudo systemctl status jenkins

If everything went well, the beginning of the status output shows that the service is active and configured to start at boot:

    ● jenkins.service - Jenkins Continuous Integration Server
     Loaded: loaded (/lib/systemd/system/jenkins.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-07-08 17:41:05 PKT; 1h 31min ago
    Main PID: 1034 (java)
      Tasks: 51 (limit: 18976)
     Memory: 614.0M
        CPU: 36.170s

Now that Jenkins is up and running, we need to adjust our firewall rules so that we can reach it from a web browser.




  

## Defining a Jenkins pipeline
