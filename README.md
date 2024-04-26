# Work opportunity in Japan (Assignment)

# Library

1. axios : for fetching data
2. react-router-dom: for routing
3. @reduxjs/toolkit: for state management , I used to store search term, and job details

## API

- I am using "jobs-api14.p.rapidapi.com" for fetching job data
- It only have limited 50 free request , and some of which I have used for testing, so only few will be remaining, after using all 50 request it will not fetch any jobs list.
- If all free request have been used, you can use mock data "/src/data.js"

## Pages

1. Home page
2. Jobs List
3. Contact Us page
4. About Us page
5. JobDetail page (only used when we smaller screen for bigger screen job detail is shown on same page as job List)

## Jobs Page

- It show List of jobs
- When clicking on any of the listed job ,job detail will be shown on right side, when we use smaller screen job detail will be shown on different page
