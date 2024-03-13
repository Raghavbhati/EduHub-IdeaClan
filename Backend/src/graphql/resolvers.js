const { createCourse } = require("../controllers/course.controllers");
const { RegisterUser, LoginUser } = require("../controllers/user.controllers");

const resolvers = {
    //for get the data
    Query: {
        users: () => {},
        courses: () => {},
        lectures: () => {}, 
        discussions: () => {},
    },
    //for upload the data in db
    Mutation: {
        createUser: async (_, {email,name, password,role}) => {return await RegisterUser({email,name, password,role})},
        loginUser: async (_, {email, password})=> {return await LoginUser({email,password})}, 
        createCourse: async (_, {name, prerequisites, description}, context) => {return await createCourse({name, prerequisites, description}, context)}, 
        createLecture: (_, args) => {},
        createDiscussion: (_, args) => {},
    },
};

module.exports = resolvers