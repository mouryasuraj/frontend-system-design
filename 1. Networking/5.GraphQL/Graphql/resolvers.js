const data = {
    authors:[
        {
            id:1, name:"Suraj Mourya", bookIds:[12,13]
        },
        { 
            id:2, name:"Vipin Yadav", bookIds:[14]
        }
    ],
    books:[
        {
            id: 12, title: "ALchemist", authorId:1
        },
        {
            id: 13, title: "Battle of Rezang La", authorId:1,
        },
        {
            id: 14, title: "Pusuit of happiness", authorId:2,
        }
    ]
}




export const resolvers = {

    Book:{
        author:(parent, args, context, info)=>{
            console.log(parent)
            return data.authors.find(a => a.id === parent.authorId)
        }
    },

    Author:{
        books:(parent, args, context, info)=>{
            return data.books.filter(a => parent.bookIds.includes(a.id))
        }
    },

    Query:{
        Authors: () => {
            return data.authors
        },
        Books: () => {
            return data.books   
        }
    },
    Mutation:{
        addBook:(parent, args, context, info)=>{
            console.log(args)
            const newBook = {...args, authorId:Number(args.authorId), id: data.books.length + 1 }
            data.books.push(newBook)
            data.authors.find(a => a.id===Number(newBook.authorId)).bookIds.push(data.books.length + 1)
            console.log(data.authors)
            console.log(data.books)
            return newBook
        }
    }
}