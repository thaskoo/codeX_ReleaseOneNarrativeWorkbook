#Deployment

Deployment is the process of putting your application on the the internet.  There are various options for deploying your application.

##Some deployment options are:
* shared hosting
* a dedicated server in a data center
* a virtual private server (VPS) provided by a cloud host
* using a Platform as a Service (PaaS)

We will be focussing on the last two options VPS and PaaS.

As a a PaaS needs less time to setup you will using one called Heroku to deploy your application.

##PaaS

A Platform as a Service (PaaS) is server infrastructure that is provided in the Cloud (in the internet) that allows one to easily deploy applications online. Typically using some command line utilities that one can easily integrate in ones application development workflow. Tight integration with github is not uncommon with git commits and pushes used to deploy ones application. As you can see this brings the deployment process close to existing application development activities.

### Deploying to Heroku

The PaaS service we will be using is called Heroku (http://heroku.com/) and it can be used to deploy a wide range of application frameworks of which Node JS is one.

To deploy your Spaza application register at Heroku and follow these steps: https://devcenter.heroku.com/articles/deploying-nodejs

##VPS providers

Virtual Private Servers provides you with dedicated servers in the cloud that one needs to configure oneself. 
This allows for alot of flexibility and freedom, but it does take a certain level of skills as you need to configure everything yourself. This include the firewall, database and web server setup. This sounds quite daunting, but there are a lots of tutorials online that guide you through these steps.

### A few examples of VPS providers are:

* Digital Ocean 
  * https://www.digitalocean.com
  * They have very good tutorials : https://www.digitalocean.com/community/tutorials
  Here are some tutorials you will need to setup a server to run NodeJS, Nginx and Mysql: 
   * https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04
   * https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu

  
* Afrihost 
  * They are a South African company
  * https://www.afrihost.com/site/product/cloud_hosting
  
* Amazon Web Services
  * A big international online retailer
  * Based in Cape Town - by the way
  * ws.amazon.com/free

* Google Compute engine
  * https://cloud.google.com/compute/
  
