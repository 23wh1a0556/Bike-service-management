# Bike-service-management
## Bike Service & Spare Parts Management System
---

## 1. Introduction

### 1.1 Purpose
This document describes the software requirements, system architecture, database design, and technical details of the **Bike Service & Spare Parts Management System**.  
The system is developed to help bike service centers manage customer details, service requests, spare parts inventory, and billing operations efficiently using a web-based application.

### 1.2 Target Audience
- Bike service center owners  
- Mechanics and service staff  
- Customers using bike service facilities  
- Students learning full-stack development  
- Faculty evaluating academic projects  

### 1.3 Objectives
- Reduce manual record keeping  
- Automate bike service management  
- Track service status efficiently  
- Manage spare parts inventory  
- Generate accurate service bills  

---
## 2. System Overview

### 2.1 User Roles

| Role | Description |
|-----|------------|
| **Admin** | Manages users, services, spare parts, and billing |
| **Staff** | Updates service status and spare part usage |
| **Customer** | Views service details and billing information |

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
[ Frontend (HTML, CSS, JavaScript) ]
                |
            HTTP Requests
                |
      [ Backend (Node.js + Express) ]
                |
          [ Database (MongoDB) ]

### 3.2 Architecture Principles
- Client–Server Architecture  
- RESTful API design  
- Modular backend structure  
- Separation of concerns  

---

## 4. Database Design

### 4.1 Database Overview
- **Database:** MongoDB  
- **ODM:** Mongoose  
- Data stored in collections  

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

### 3.2 Architecture Principles
- Client–Server Architecture  
- RESTful API design  
- Modular backend structure  
- Separation of concerns  

---

## 4. Database Design

### 4.1 Database Overview
- **Database:** MongoDB  
- **ODM:** Mongoose  
- Data stored in collections  

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

### 3.2 Architecture Principles
- Client–Server Architecture  
- RESTful API design  
- Modular backend structure  
- Separation of concerns  

---

## 4. Database Design

### 4.1 Database Overview
- **Database:** MongoDB  
- **ODM:** Mongoose  
- Data stored in collections  

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
4.2.2 Customers Collection
{
  "_id": "ObjectId",
  "name": "string",
  "phone": "string",
  "address": "string"
}
4.2.3 Bikes Collection
{
  "_id": "ObjectId",
  "customerId": "ObjectId",
  "bikeModel": "string",
  "bikeNumber": "string"
}
4.2.4 Services Collection
{
  "_id": "ObjectId",
  "bikeId": "ObjectId",
  "serviceType": "string",
  "status": "Pending | In Progress | Completed",
  "serviceDate": "Date"
}
4.2.5 Spare Parts Collection
{
  "_id": "ObjectId",
  "partName": "string",
  "price": "number",
  "quantity": "number"
}
4.2.6 Billing Collection
{
  "_id": "ObjectId",
  "serviceId": "ObjectId",
  "totalAmount": "number",
  "billDate": "Date"
}
5. Backend Design
5.1 Technology Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

5.2 Backend Folder Structure
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── app.js
│── package.json
5.3 Authentication Flow

User logs in using credentials

Password verification

JWT token generation

Token validation for protected routes
