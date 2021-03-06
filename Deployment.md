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

##IaaS

Infrastructure as a Service(IaaS) is server infrastructure that is provided as as a service in the cloud. Virtual Private Servers(VPS) provides you with dedicated servers in the cloud that you configure. This allows for flexibility and freedom, but it does assume a certain level of skills to configure everything. The typical server configuration  includes the firewall, database and web server setup. This might sounds quite daunting, but there are a lots of tutorials online that guide you through these steps.

### A few examples of VPS providers are:

* Digital Ocean

Digital Ocean is an IaaS provider which provides VPS's

You can find them at https://www.digitalocean.com 
They have very good tutorials : https://www.digitalocean.com/community/tutorials

Here are some tutorials you will need to setup a server to run NodeJS, Nginx and Mysql: 
   * https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04
   * https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu

  You will need to follow some of these tutorials piece meal as we as not using Apache as a web server or going to setup PhpMyAdmin on the VPS.

* Afrihost 
  * They are a South African company that provide IaaS.
  * https://www.afrihost.com/site/product/cloud_hosting
  
* Amazon Web Services
  * A big international online retailer also provides IaaS
  * Based in Cape Town - by the way
  * ws.amazon.com/free

* Google Compute engine
  * https://cloud.google.com/compute/
  
