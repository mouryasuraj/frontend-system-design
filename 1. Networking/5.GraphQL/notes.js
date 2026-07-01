/*

// What is GraphQL?
--> 
    1. GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows clients to request exactly the data they need, making it more efficient than traditional REST APIs.
    2. GraphQL was developed by Facebook in 2012 and released as an open-source project in 2015. It has since gained popularity for its flexibility and efficiency in handling complex data requirements.

// How does GraphQL work?
--> 1. GraphQL operates over a single endpoint, typically using HTTP POST requests. Clients send queries to this endpoint, specifying the data they need, and the server responds with JSON data that matches the query structure.
    2. The GraphQL schema defines the types of data available and the relationships between them. It serves as a contract between the client and server, ensuring that both parties understand the structure of the data being exchanged.
    3. GraphQL queries can include nested fields, allowing clients to retrieve related data in a single request. This reduces the number of round trips needed to fetch data compared to REST APIs, which often require multiple endpoints for related resources.
    4. GraphQL also supports mutations, which allow clients to modify data on the server, and subscriptions, which enable real-time updates when data changes.

// Unlike REST APIs, GraphQL allows clients to specify exactly what data they need, reducing over-fetching and under-fetching of data. This makes it more efficient for applications with complex data requirements.
// In Rest APIs, clients often receive more data than they need (over-fetching) or have to make multiple requests to get all the necessary data (under-fetching). GraphQL addresses these issues by allowing clients to request only the specific fields they require, leading to improved performance and reduced bandwidth usage.


Diagram to illustrate the difference between REST and GraphQL:
REST API: (If we need only the name and email of a user, then we are over-fetching data)
Client --> GET /users --> Server --> Response: { id, name, email, address, phone }

GraphQL: (If we need only the name and email of a user, then we are fetching exactly what we need)
Client --> POST /graphql --> Server --> Response: { id, name, email }


// History of GraphQL:
1. 2012 by Facebook
2. 2015 open-sourced
3. Gained popularity for its flexibility and efficiency in handling complex data requirements



// Benefits of GraphQL:
    1. Avoiding Over-fetching and Under-fetching: Clients can request exactly the data they need, reducing unnecessary data transfer.
    2. Better Mobile Performance: By minimizing the amount of data sent over the network, GraphQL can improve performance on mobile devices with limited bandwidth.
    3. Strongly Typed Schema: The GraphQL schema defines the types of data available and the relationships between them, providing a clear contract between the client and server.
    4. Real-time Data with Subscriptions: GraphQL supports subscriptions, allowing clients to receive real-time updates when data changes on the server.
    5. Single Endpoint: GraphQL operates over a single endpoint, simplifying the API structure and reducing the number of requests needed to fetch related data.
    6. Declarative Data Fetching: Clients can specify the exact shape of the data they need, making it easier to work with complex data structures.
    7. Structured and Predictable Responses: The server responds with data that matches the structure of the query, making it easier for clients to handle the response.
    8. Introspection: GraphQL APIs can be introspected, allowing clients to query the schema itself and discover the available types and fields, making it easier to explore and understand the API.




// Rest vs GraphQL:

Aspect | REST | GraphQL
--- | --- | ---
1. Data Fetching | Multiple endpoints for different resources | Single endpoint for all queries
2. Request structure | Fixed structure + HTTP methods (GET, POST, PUT, DELETE) | Flexible (Query(to get), Mutation(to update), Subscription(to listen for changes))
3. Over-fetching/Under-fetching | Common issue due to fixed endpoints | Avoided by allowing clients to specify exactly what data they need
4. Response size | Can be large due to over-fetching | Typically smaller, as clients request only the data they need
5. Versioning | Often requires versioning of endpoints | No versioning needed, as clients can request specific fields
6. Schema definition | Not strictly defined, can vary between endpoints | Strongly typed schema defines available data and relationships 
7. Real-time capabilities | Limited, often requires additional tools (e.g., WebSockets) | Built-in support for real-time updates through subscriptions
8. Tooling Support | Wide range of tools and libraries available | Growing ecosystem of tools and libraries, with strong support for introspection and schema exploration
9. Caching | Can be implemented at the HTTP level, but may require additional configuration | Caching can be more complex due to dynamic queries, but can be implemented at the field level
10. CLient Control | Limited, as clients have to work with predefined endpoints and responses | High, as clients can specify exactly what data they need and how it should be structured
11. Adoption and Community | Widely adopted with a large community and extensive documentation | Growing adoption with an active community and increasing resources for learning and implementation



// GraphQL --> We can use GraphQL libraries like Apollo Client or Relay to manage data fetching and caching in our applications. These libraries provide tools for querying, mutating, and subscribing to data, as well as handling caching and state management.

// Client --> We can use fetch or GraphQL client libraries to send queries and mutations to the GraphQL server. These libraries provide a convenient way to interact with the GraphQL API and handle responses.


// Building blocks of GraphQL:
1. Schema: Defines the types of data available and the relationships between them. It serves as a contract between the client and server.
2. Queries: Allow clients to request specific data from the server. Queries can include nested fields and arguments to filter or sort the data.
3. Mutations: Allow clients to modify data on the server, such as creating, updating, or deleting records.
4. Subscriptions: Enable real-time updates when data changes on the server, allowing clients to receive notifications of changes without polling.
5. Resolvers: Functions that handle the logic for fetching or modifying data in response to queries, mutations, or subscriptions. Resolvers are responsible for returning the appropriate data based on the schema and query structure.


1. Schema:
    --> We can defined scalar types (Int, Float, String, Boolean, ID) and custom object types to represent our data.
    --> Ex: type User {
                id: ID
                name: String
                email: String  
            }
    --> This is called SDL (Schema Definition Language) which is used to define the structure of the data and the relationships between different types.

2. Queries:
    --> Queries are used to fetch data from the server. They can include nested fields and arguments to filter or sort the data.
    --> Ex: query {
                user(id: "1") {
                    id 
                    name
                    email
                }
            }
3. Mutations:
    --> Mutations are used to modify data on the server, such as creating, updating, or deleting records.
    --> Ex: mutation {
                createUser(name: "John Doe", email: "john.doe@example.com") {
                    id
                    name
                    email
                }
            }
4. Resolvers:
    --> Resolvers are functions that handle the logic for fetching or modifying data in response to queries, mutations, or subscriptions. They are responsible for returning the appropriate data based on the schema and query structure.
    --> Ex: const resolvers = {
        User: {
            id: (user) => user.id,
            name: (user) => user.name,
            email: (user) => user.email
        }
    };





*/