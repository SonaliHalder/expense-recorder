# Expense Recorder App
## API List
---
### Users
1. POST/ Signup
2. POST /login
3. GET /Profile  Authorization 
### Categories
1. GET/Categories  Authorization : token
2. POST/Categories  Authorization 
3. Delete/ Categories/:id  Authorization 
 
### Expenses
1. POST/ Expenses Authorization 
2. GET/ Expenses  Authorization (Last x expenses)
3. Delete/ Expenses/:eid Authorization 
4. GET/ Expenses/filter?cid=123from=2026-01-01&to=2026-01-31  Authorization 
5. PUT/ Expenses Authorization 