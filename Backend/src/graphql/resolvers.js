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
        loginUser: async (_, {email, password}, context)=> {return await LoginUser({email,password}, context)}, 
        changePassword :async ()=>{return await passwordChange({})},
        createCourse: (_, args) => {}, 
        createLecture: (_, args) => {},
        createDiscussion: (_, args) => {},
    },
};

module.exports = resolvers