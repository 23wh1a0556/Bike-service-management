# Bike-service-management
**Bike Service & Spare Parts Management System**

---

## 1. Introduction

### 1.1 Purpose
This document describes the software requirements, system architecture, database design, and technical details of the Bike Service & Spare Parts Management System. The system is developed to help bike service centers manage customer details, service requests, spare parts inventory, and billing operations efficiently using a web-based application.

---

### 1.2 Target Audience
- Bike service center owners  
- Mechanics and service staff  
- Customers using bike service facilities  
- Students learning full-stack development  
- Faculty evaluating academic projects  

---

### 1.3 Objectives
- Reduce manual record keeping  
- Automate bike service management  
- Track service status efficiently  
- Manage spare parts inventory  
- Generate accurate service bills  

---

## 2. System Overview

### 2.1 User Roles

| Role     | Description                                               |
|----------|-----------------------------------------------------------|
| Admin    | Manages users, services, spare parts, and billing          |
| Staff    | Updates service status and spare part usage                |
| Customer | Views service details and billing information              |

---

### 2.2 Core Features
- Customer and bike registration  
- Service request management  
- Service status tracking  
- Spare parts inventory management  
- Billing and invoice generation  
- Low-stock alerts for spare parts  

---

## 3. High-Level Architecture

### 3.1 System Architecture
```
[ Frontend (HTML, CSS, JavaScript) ]
                |
            HTTP Requests
                |
      [ Backend (Node.js + Express) ]
                |
          [ Database (MongoDB) ]


````

---

### 3.2 Architecture Principles
- Client–Server Architecture  
- RESTful API design  
- Modular backend structure  
- Separation of concerns  

---

## 4. Database Design

### 4.1 Database Overview
- Database: MongoDB  
- ODM: Mongoose  
- Data stored in collections  

---

### 4.2 Collections

#### 4.2.1 Users Collection
```json
{
  "_id": "ObjectId",
  "username": "string",
  "password": "string",
  "role": "admin | staff",
  "createdAt": "Date"
}
````

#### 4.2.2 Customers Collection

```json
{
  "_id": "ObjectId",
  "name": "string",
  "phone": "string",
  "address": "string"
}
```

#### 4.2.3 Bikes Collection

```json
{
  "_id": "ObjectId",
  "customerId": "ObjectId",
  "bikeModel": "string",
  "bikeNumber": "string"
}
```

#### 4.2.4 Services Collection

```json
{
  "_id": "ObjectId",
  "bikeId": "ObjectId",
  "serviceType": "string",
  "status": "Pending | In Progress | Completed",
  "serviceDate": "Date"
}
```

#### 4.2.5 Spare Parts Collection

```json
{
  "_id": "ObjectId",
  "partName": "string",
  "price": "number",
  "quantity": "number"
}
```

#### 4.2.6 Billing Collection

```json
{
  "_id": "ObjectId",
  "serviceId": "ObjectId",
  "totalAmount": "number",
  "billDate": "Date"
}
```

---

## 5. Backend Design

### 5.1 Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

---

### 5.2 Backend Folder Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
└── package.json
```

---

### 5.3 Authentication Flow

* User logs in using credentials
* Password verification
* JWT token generation
* Token validation for protected routes

---

### 5.4 API Endpoints

**Auth APIs**

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | /login   | User login  |

**Service APIs**

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /services | Add service   |
| GET    | /services | View services |

**Spare Parts APIs**

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| POST   | /parts   | Add spare part   |
| GET    | /parts   | View spare parts |

---

## 6. Frontend Design

### 6.1 Technology Stack

* HTML
* CSS
* JavaScript

---

### 6.2 Frontend Folder Structure

```
frontend/
├── css/
├── js/
├── pages/
└── index.html
```

---

### 6.3 Key Pages

* Login Page
* Dashboard
* Customer Management Page
* Bike Service Page
* Spare Parts Management Page
* Billing Page

---

## 7. Functional Requirements

* Admin must be able to manage services and spare parts
* Staff must update service status
* System must generate service bills
* Users must view service history

---

## 8. Non-Functional Requirements

* User-friendly interface
* Fast response time
* Secure data storage
* High system availability

---

## 9. Security Considerations

* Password encryption
* JWT-based authentication
* Role-based access control
* Input validation

---

## 10. Future Enhancements

* Online payment integration
* Customer notification system
* Mobile application support
* Service reminders

---

## 11. Conclusion

Bike-service-management provides a simple, efficient, and user-friendly platform for managing bike service operations and spare parts inventory. The system demonstrates real-world full-stack web application development, effective use of Node.js and MongoDB, and organized handling of service workflows and inventory management.

---

📌 **Project Name:** Bike-service-management
📌 **Document Type:** SRS & Technical Documentation
📌 **Database:** MongoDB
---
