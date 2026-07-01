export const resolvers = {
    Query:{
        authors: () => {
            return [
                {
                    id:"123",
                    name:"Suraj Mourya"
                }
            ]
        },
        books: () => {
            return [
                {
                    id:"321",
                    title:"Alchemist",
                    publishedYear:2017
                }
            ]
        }
    }
}