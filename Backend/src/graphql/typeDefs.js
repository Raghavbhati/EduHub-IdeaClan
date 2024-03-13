const typeDefs = `
type User {
    id: ID!
    email: String!
    name: String!
    password: String
    role: Role!
    courses: [Course]
}

enum Role {
    Admin
    Student
}

type Course {
    id: ID!
    name: String!
    lectures: [Lecture]
}

type Lecture {
    id: ID!
    title: String!
    date: String!
    startTime: String!
    endTime: String!
    description: String
    link: String!
    assignmentLink: String
    discussions: [Discussion]
}

type Discussion {
    id: ID!
    message: String!
    timestamp: String!
    user: User!
}

type Query {
    users: [User]
    courses: [Course]
    lectures: [Lecture]
    discussions: [Discussion]
}

type Mutation {
    createUser(email: String!, name: String!, password: String!, role: Role!): User
    loginUser(email: String!,password: String!): User
    changePassword(email: String!, password: String!) : User
    
    createCourse(name: String!): Course
    createLecture(title: String!, startTime: String!, endTime: String!, description: String, link: String!, assignmentLink: String): Lecture
    createDiscussion(message: String!, timestamp: String!): Discussion
}

`;

module.exports = typeDefs