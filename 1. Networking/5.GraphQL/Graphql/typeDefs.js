

/*

1. ! mark represent that field is mandatory
2. All the data that needs to fetch that will be used by type Query definition
3. All the method to update the data will be in type Mutation
*/

export const typeDefs = `#graphql 

    type Author {
        id: ID!
        name: String!
        books:[Book]
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author:Author
    }

    type Query {
        Authors: [Author]
        Books: [Book]
    }

    type Mutation {
        addBook(title:String!, authorId: ID!): Book!
    }


`