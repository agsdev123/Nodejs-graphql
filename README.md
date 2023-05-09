# Query 


# query ($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
  }
}
# {
  "id":"6459d51eda15d9ccb1c1791d"
}
# mutation ($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}

# {
    "name": "John Doe",
    "email": "john11@example.com"
  }
  ```

## GraphQL
#query { getAllUsers { id name email } }