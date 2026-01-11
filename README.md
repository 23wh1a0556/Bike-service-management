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
