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

As we can Java 11 was installed successfully: 

    ali@pop-os:~$ java -version
    openjdk version "11.0.15" 2022-04-19
    OpenJDK Runtime Environment (build 11.0.15+10-Ubuntu-0ubuntu0.22.04.1)
    OpenJDK 64-Bit Server VM (build 11.0.15+10-Ubuntu-0ubuntu0.22.04.1, mixed mode, sharing)

    
## Installing Jenkins

The version of Jenkins included with the default Ubuntu packages is often outdated. To ensure we have the latest fixes and features, we will use the project-maintained packages to install Jenkins.

First, we will add the repository key to the system:

    wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

After the key is added the system will return with OK.

Next,we will append the Debian package repository address to sources.list which maintains all repositories:

    sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
    
After both commands have been entered, we’ll run update so that apt will use the newly added repository.

    sudo apt update

Finally, we’ll install Jenkins and its dependencies.

    sudo apt install jenkins
    
### Starting Jenkins

Let’s start Jenkins by using **systemctl**:

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

### Opening Firewall

By default, Jenkins runs on port 8080. We’ll open that port using **ufw**:

    sudo ufw allow 8080
    
To check ufw’s status to confirm the new rules:

    sudo ufw status
    
We can see that port **8080** is allowed:

    ali@pop-os:~$ sudo ufw status
    Status: active

    To                         Action      From
    --                         ------      ----
    8080                       ALLOW       Anywhere                  
    8080 (v6)                  ALLOW       Anywhere (v6)            


## Setting up Jenkins


To set up  installation, we will visit Jenkins on its default port i.e. 8080, using server IP address: http://localhost:8080

We will receive the Unlock Jenkins screen, which displays the location of the initial password:

![Jenkins unlock screen](/steps/11.png)

In the terminal window, we will use the **cat** command to display the password:

    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    
We will copy the password from the terminal and paste it into the Administrator password field, then click Continue.

The next screen show us the option of installing suggested plugins or selecting specific plugins:

![installation method selection](/steps/13.png)

We’ll click the Install suggested plugins option, which will immediately begin the installation process.

![installation begin](/steps/14.png)

When the installation is complete, we'll be prompted to set up the first administrative user. Or we can use the default admin user

![user selection](/steps/15.png)

We will setup our own user and enter the name and password for our user:

![user selection](/steps/16.png)

We’ll receive an Instance Configuration page that will ask us to confirm the preferred URL for our Jenkins instance. We will confirm it as this is the URL we want.

![Instance cofiguration](/steps/17.png)

After confirming, click Save and Finish. We’ll receive a confirmation page confirming that **“Jenkins is Ready!”**:

![Jenkins ready](/steps/18.png)

Click Start using Jenkins to visit the main Jenkins dashboard:

![Jenkins Dashboard](/steps/19.png)

At this point, we have completed installation of Jenkins.


## Defining Jenkis Pipeline

