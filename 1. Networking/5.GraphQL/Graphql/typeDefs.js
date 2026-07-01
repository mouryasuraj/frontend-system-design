

/*

1. ! mark represent that field is mandatory
2. All the data that needs to fetch that will be used by type Query definition
3. All the method to update the data will be in type Mutation
*/

export const typeDefs = `#graphql 

    type author {
        id: ID!
        name: String!
        books:[book]
    }

    type book {
        id: ID!
        title: String!
        publishedYear: Int
        author:author
    }

    type Query {
        authors: [author]
        books: [book]
    }


`