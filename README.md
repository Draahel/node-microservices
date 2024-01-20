# **Data Structure**
## Conditions
1. One user can have many posts 1:n
2. One user can follow other user: n:n
3. One user can like a post n:n

**A relational database will be used**

## **Entities**
### Users
- id
- name
- username

### Posts
- id
- user

### User_Follow
- id
- from
- to

### Post_Like
- id
- post
- user

### Auth
- id
- email
- user
- password

