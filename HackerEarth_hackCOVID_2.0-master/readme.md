# CoviCure Real-Time Chat Application

### [Site is Live](https://60df10a4c5f3c1dcbcb16a8a--covicure-chat-application.netlify.app/)


Video Link of Project Working :<br/> 
        # https://www.youtube.com/watch?v=s9hB2Dh1RQU<br/> 
        # https://drive.google.com/file/d/1UN4qJoh7HvggHX8tCZWCj15I1bEnILwe/view?usp=sharing

* Power Point Presentation Link Of Project Idea :<br/> 
https://docs.google.com/presentation/d/1d3MucTDWLTPeOp9L25mnyVE_nBvDekIjZvipGuIv4ek/edit?usp=sharing 

* Detailed Explaination of Our Project Idea:  
                1. Our idea is about creating a supply chain optimisation as well as a resource management system using a full-fledged web application to address the demand of Covid resources.<br/> 
                2. It will serve for urgent medical essentials and services such as availability of hospital beds, oxygen cylinders, blood & plasma donors, medicines, etc.  
                3. Using our Chat Application, we aim to create a helping community in these harsh times.<br/> 

* The problem it Solves / Solutions Provided : 
        In these hard times of the pandemic, many people have lost their loving ones. There are many people, who after their Covid Recovery, are ready to donate Covid Resources. Our idea revolves around solving this problem. Our community will bridge the gap between the people who are in dire need of help and the ones who are willing to donate.<br/> 
        The major problems/challenges our project addresses are :<br/> 
        1. There are many people who are in dire need of urgent medical resources, especially during this pandemic situation. But it becomes quite difficult for them to find those people who are willing to donate these resources. So, our main objective is to bridge the gap between the willing donor and the needy by creating a community where they can connect and help each other.<br/> 
        2. We will also be ensuring to facilitate the exchange between them, by providing on-time delivery and transportation of these resources.<br/> 
        3. Our application will also provide real time availability of oxygen refill centres and nearby hospital beds for emergency requirements.<br/> 

* How it Works? :<br/> 
                1. Web Scraping is used to collect data of both the willing donors and the people in need.  
                2. Using Automation, an automated message is sent to all the users, containing the link of our Chat Application. <br/> 
                3. Using our Chat application, people can communicate with each other in real-time. Their essential data is also stored securely. <br/> 
                4. Finally, our CoviCure Website displays the data of all the donors. It also addresses Supply Chain Optimisation and Resource Management Services such as Nearby Oxygen Refill Centres and Hospital Beds availability. <br/>  

* Real-Time Usage of Project : <br/> 
        Fully-Fledged and Completely Independent Application that can be used by any Individual or ant Organisation for the Betterment of the Society<br/> 

* ![CoviCure Chat App UI](https://github.com/Trijal-Bhardwaj/covicure_chat_application/blob/master/CoviCureUI.png)

## Tech Stack Used:<br/> 
*Web Scraping & Automation: Node.js & Puppeteer*<br/> 
*Front-End: Reactjs, HTML, CSS, JS*<br/> 
*Back-End: Node.js, Express, Socket.io*<br/> 

## Demo Video:
![Demo Video](https://github.com/Trijal-Bhardwaj/covicure_chat_application/blob/master/CoviCureProjectDemo.gif)

* Project is Live At:<br/> 
https://60df10a4c5f3c1dcbcb16a8a--covicure-chat-application.netlify.app/<br/> 

* Step-By-Step Procedure to Run this Project on Your Local Machine :<br/> 
            Step 1 : Fork this repository or else use git clone, to clone the repository on your local machine<br/> 
            Step 2 : Install node and some NPM Libraries such as puppeteer, request and require modules for Web Scraping and Automation. To Run the Real-Time Chat Application, Install React NPM Libraries such as react-router-dom, react-scrollable-feed, react-emoji, socket.io-client, query-string, etc.<br/> 
            Step 3 : Open Any Code Editor :<br/> 
            Step 4 : Run the code in Following Manner :<br/> 
            # For Running Web-Scraping & Automation Part-<br/> 
                    Run dataWebScrappingDonor.js File. It will scrap, collect and store data of Donor people in a donor.json File.<br/> 
                    Run dataWebScrappingNeedy.js File. It will scrap, collect and store data o Needy people in a needy.json File.<br/> 
                    Run automation.js File. It will Automate Twitter and will Tweet an Automated Message from Our Personal Twitter Account to Evey Donor and Needy Person, containing the Hosted Link of our CoviCure Real-Time Chat Application.<br/> 
                    Run htmlUpdate.js File. It will Display a List of All the Donor and Needy People Twitter UserIDs. It will also show the Tweet Delivery Status for Each Person.<br/> Through our Real-Time Chat Application Link, the user can join and connect with each other from our Real-Time Chat Application, where there is a Helping Community to assist you regarding any emergency requirements related to Covid Resources.<br/> 
            # For Running CoviCure Real-Time Chat Application-<br/> 
                    Open the CoviCure ChatApp Folder, run npm i && npm start for both client and server Folders to Start the Development Server<br/>

# Hospital Management
---
## Screenshots
### Homepage
![Homepage Snap](https://github.com/Trijal-Bhardwaj/Amity-University-Technothon1.0/blob/master/covi-cure-hospitalmanagement-website/static/screenshots/homepage.png)
### Admin Dashboard
![Dashboard Snap](https://github.com/Trijal-Bhardwaj/Amity-University-Technothon1.0/blob/master/covi-cure-hospitalmanagement-website/static/screenshots/admin_dashboard.png)
### Invoice Receipt
![Invoice Snap](https://github.com/Trijal-Bhardwaj/Amity-University-Technothon1.0/blob/master/covi-cure-hospitalmanagement-website/static/screenshots/invoice.png)
### Doctors List
![Doctor Snap](https://github.com/Trijal-Bhardwaj/Amity-University-Technothon1.0/blob/master/covi-cure-hospitalmanagement-website/static/screenshots/admin_doctor.png)
---
## Functions
### Admin
- Signup their account. Then Login (No approval Required).
- Can register/view/approve/reject/delete doctor (approve those doctor who applied for job in their hospital).
- Can admit/view/approve/reject/discharge patient (discharge patient when treatment is done).
- Can Generate/Download Invoice pdf (Generate Invoice according to medicine cost, room charge, doctor charge and other charge).
- Can view/book/approve Appointment (approve those appointments which is requested by patient).

### Doctor
- Apply for job in hospital. Then Login (Approval required by hospital admin, Then only doctor can login).
- Can only view their patient details (symptoms, name, mobile ) assigned to that doctor by admin.
- Can view their discharged(by admin) patient list.
- Can view their Appointments, booked by admin.
- Can delete their Appointment, when doctor attended their appointment.

### Patient
- Create account for admit in hospital. Then Login (Approval required by hospital admin, Then only patient can login).
- Can view assigned doctor's details like ( specialization, mobile, address).
- Can view their booked appointment status (pending/confirmed by admin).
- Can book appointments.(approval required by admin)
- Can view/download Invoice pdf (Only when that patient is discharged by admin).

---

## HOW TO RUN THIS PROJECT
- Install Python(3.7.6) (Dont Forget to Tick Add to Path while installing Python)
- Open Terminal and Execute Following Commands :
```
pip install django==3.0.5
pip install django-widget-tweaks
pip install xhtml2pdf
```
- Download This Project Zip Folder and Extract it
- Move to project folder in Terminal. Then run following Commands :
```
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
- Now enter following URL in Your Browser Installed On Your Pc
```
http://127.0.0.1:8000/
```

