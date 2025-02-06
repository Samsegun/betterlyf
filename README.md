# Betterlyf Admin Panel -

This is the client app for the [Betterlyf Admin Panel App](https://www.betterlyf-admin.vercel.app/). The repo can be found here [Betterlyf Github repo](https://github.com/Samsegun/betterlyf-admin)

## Table of contents

-   [Overview](#overview)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [Features](#features)
    -   [Patients](#patients)
    -   [Other Features](#other-features)
    -   [Built with](#built-with)
    -   [Continued development](#continued-development)
-   [Author](#author)
<!-- -   [Acknowledgments](#acknowledgments) -->

## Overview

Betterlyf is a clinic booking app built using Next.js and Supabase. It allows patients to book appointments with specialists, while admins and specialists manage their profiles and appointments through a separate [React-based admin panel](https://github.com/Samsegun/betterlyf-admin)

### Screenshot

![screenshot](./betterlyf-client.jpeg)

### Links

-   Live Site URL: [Betterlyf](https://www.betterlyf.vercel.app)

## Features

### Patients

-   Browse & book appointments with specialists
-   View and manage bookings
-   Secure authentication via Clerk
-   Availability & time slots (9 AM - 5 PM) (constraints was added to bookings schema on supabase to enable the uniqueness of each booking i.e. two bookings can't have the same specialist, time-slot and date)
-   Booking statuses: Pending, Confirmed, Completed, No-Show and Cancelled

### Other Features

-   Date selection using react-day-picker & date-fns
-   Pagination and Filter for specialists
-   Deployment on Vercel

### Built with

-   Frontend: Next.js and TypeScript
-   Database: Supabase
-   Authentication: Clerk
-   Date-picker: react-day-picker
-   Dates Functionality: date-fns
-   Styling: tailwind-css

### Continued development

-   Improve the composition of colors and layout

## Author

-   Github - [Samuel Oyebade](https://github.com/Samsegun/)
-   Gmail - [Oyebade Sam](mailto:oyebadesegunsam@gmail.com)
-   X (Twitter) - [@samsegun10](https://www.twitter.com/samsegun10)
