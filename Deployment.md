#Deployment

Deployment is the process of putting your application on the the internet.  There are various options for deploying your application.

##Some deployment options are:
* shared hosting
* a dedicated server in a data center
* a virtual private server (VPS) provided by a cloud host
* using a Platform as a Service (PaaS)

We will be focussing on the last two options VPS and PaaS. Later you will use a PaaS called Heroku to deploy your application.

##VPS providers

Virtual Private Servers providei you with dedicated servers in the cloud that one needs to configure oneself. 
This allows for alot of flexibility and freedom, but it does take a certain level of skills as you need to configure everything yourself. This include the firewall, database and web server setup. This sounds quite daunting, but there are a lots of tutorials online that guide you through these steps.

### A few examples of VPS providers are:

* Digital Ocean 
  * https://www.digitalocean.com
  * They have very good tutorials : https://www.digitalocean.com/community/tutorials
  
* Afrihost 
  * They are a South African company
  * https://www.afrihost.com/site/product/cloud_hosting
  
* Amazon Web Services
  * A big international online retailer
  * Based in Cape Town - by the way
  * ws.amazon.com/free

* Google Compute engine
  * https://cloud.google.com/compute/
  
##PaaS

Platform as a Service is some infrastructure that are provided in the Cloud (intetnet) that allows one to easily deploys ones application on the internet. Typically using some command line arguments that one can easily integrate into ones application development workflow. Tight integration with github is not uncommon with git commits and pushes used to deploy ones application. As you can see this brings the deployment process close to ones application development activities.

### Deploying to Heroku

The PaaS service we will be using is called Heroku (http://heroku.com/) and it can be used to deploy a wide range of application frameworks of which Node JS is one.

To deploy your Spaza application register at Heroku and follow these steps: https://devcenter.heroku.com/articles/deploying-nodejs
