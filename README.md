# ⚙️Company-Sistem-Crud
What this sistem do ?\
This sistem save customers and products data to a company. This app have just one user but you can change using your own email and password.\
To test the app click [Here](https://company-sistem.herokuapp.com) to acess it use this credencials...
```bash
Email: admin@admin.com
Password: 123456
```
# Explanation
After making the login using JWT a token is create and send to cookies.\
All the GET routes have a middleware to verify if have the token and if the token is valid, if not you will be redirect to error page.\
Sending the message `Acess denied!`\
The products will be save like the customers but the products page have a feature to calculate the total and display to the user to know how much money the company have on inventory.

# User 
On your Data Base add the user like the image bellow.\
The sistem is cheking the cryptography , if you don't want this feature is just remove the bcrypt verification.
![5Image](design/design6.png)
# Mental Map
![7Image](design/design7.png)
# Dependencies
```bash
  
  $ npm install bcryptjs-nodejs
  
  $ npm install dotenv

  $ npm install method-override
  
  $ npm install ejs
  
  $ npm install express
 
  $ npm install mongoose

  $ npm install nodemon

  $ npm install cookie-parser 
  
  $ npm install jsonwebtoken
  
  $ npm install cookie-parser
  
```

# Observation
  First of all the CSS is not too good because i wasn't wanting expend too much time making the Front-End so i used BootStrap,
  because this the mobile version can show some problems.\
  Change the file(.env_sample) to .env, and complete using your own data.\
  Nodemon it's not necessary you can change the start script to (node app.js)\
  Before use this app on your localhost check if you have [Node](https://nodejs.org/en/).
  

# Design
![1Image](design/design1.png)
![2Image](design/design2.png)
![3Image](design/design3.png)
![4Image](design/design4.png)
![5Image](design/design5.png)
