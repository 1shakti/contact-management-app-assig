# Contact Management App with Charts and Maps

Click [here](https://contact-management-app-assig.vercel.app/) for the demo.

## Overview

This project is a contact management application featuring a dashboard with COVID-19 charts and maps. It uses React with TypeScript, TailwindCSS for styling, React Router v6 for routing, and React Query for data fetching and state management.

## Features

- **Contact Management**:
  - Add, edit, and delete contacts.
  - View detailed information for each contact.
  - List all contacts with Redux state management.

- **Dashboard**:
  - Line chart showing COVID-19 case fluctuations over time.
  - Interactive Leaflet map with markers indicating COVID-19 statistics by country.

## Tech Stack

- **Frontend**: React, TypeScript, React Router v6, React Query
- **Styling**: TailwindCSS
- **Mapping**: React Leaflet
- **Charts**: Chart.js
- **State Management**: Redux-toolkit

## API Endpoints

- **World Wide Data of Cases**: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
  - Provides global COVID-19 statistics including total cases, deaths, and recoveries.

- **Country-Specific Data of Cases**: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
  - Provides COVID-19 statistics for individual countries.

- **Historical Graph Data for Cases**: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)
  - Provides historical data of COVID-19 cases, deaths, and recoveries over time for graph plotting.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn (for dependency management)

## Notes

- **State Management**: Redux is used for managing contact data.
- **Responsive Design**: The application is designed to be responsive and functional on both desktop and mobile devices.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/1shakti/contact-management-app-assig.git
   cd contact-management-app-assig
   ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```
    or

    ```bash
    npm install
    ```    

3. **Run the Application**:
    ```bash
    npm start
    ```
    or
    
    ```bash
    yarn start
    ```    

## Building for Production
To create a production build of the application:
3. **Build the Project**:
    ```bash
    npm run build
    ```
    or
    
    ```bash
    yarn build
    ```