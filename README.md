**Incitra** - Incident Management Application: This repository contains both frontend and backend applications.

Frontend: Built with React, featuring **React Hook Form** for validation and **AWS Amplify** for deployment. Users can create, view, edit, and delete incidents. **REST API** integration with backend is planned.
Backend: Built with **Spring Boot** and **PostgreSQL**, using **Hibernate/JPA** for persistence. Provides **RESTful endpoints** and is deployed on **AWS Elastic Beanstalk**. 

API calls from the frontend are not yet fully functional.

⚠️ **Status**

**Note:** The backend integration via AWS Elastic Beanstalk and API Gateway is **not fully implemented yet**.  
API calls currently do not work, and there are CORS issues.  

The application is still in **development**.


🚀**Live Demo**🚀

- Frontend: https://master.d391sbei662o8o.amplifyapp.com

❗Backend endpoints are currently not active.


**Frontend Features**
- Create new incidents  
- List, search, and filter incidents  
- Delete incidents  
- Form input validation using React Hook Form 

**Developer Notes**
- The backend is in a separate repository under `/backend`  
- AWS Proxy integration (API Gateway → Elastic Beanstalk) is still being configured  
- Once the backend is available, all API calls will work as expected


