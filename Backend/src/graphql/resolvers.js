const {createCourse, updateCourse, deleteCourse} = require("../controllers/course.controllers");
const { RegisterUser, LoginUser, passwordChange, DeleteUser } = require("../controllers/user.controllers");
const { createLecture, updateLecture, deleteLecture } = require("../controllers/leacture.controller");
const authorization = require("../middleware/authorization.middleware");

const resolvers = {
    Query: {
        users: () => {}, // function to get all users
        user :() => {}, // function to get a specific user

        courses: () => {}, // function to get all courses
        course: () => {}, // function to get a specific course

        lectures: () => {}, // function to get all lectures
        lecture: () => {}, // function to get a specific lecture
        
        discussions: () => {}, // function to get all discussions
        discussion: () => {}, // function to get a specific discussion
    },
    Mutation: {
        createUser: async (_, {email,name, password,role}) => {return await RegisterUser({email,name, password,role})},
        loginUser: async (_, {email, password})=> {return await LoginUser({email,password})},
        passwordChange: async (_, {id, oldPassword, newPassword}) => {return await passwordChange({id, oldPassword, newPassword})},
        deleteUser: async (_, {id}) => {return await DeleteUser({id})},

        createCourse: async (_, {name, prerequisites, description}, context) => {
            if(!authorization(context)){
                return await createCourse({name, prerequisites, description})
            }
        }, 
        updateCourse: async (_, {id, name, prerequisites, description}, context) => {
            if(!authorization(context)){
                return await updateCourse({id,name, prerequisites, description})
            }
        }, 
        deleteCourse: async (_, {id}, context) => {
            if(!authorization(context)){
                return await deleteCourse(id)
            }
        },        

        createLecture: async (_, {course, title, date, startTime, endTime, description, link, assignmentLink}, context) => {
            if(!authorization(context)){
                return await createLecture({course, title, date, startTime, endTime, description, link, assignmentLink})
            }
        },
        updateLecture: async (_, {id, title, date, startTime, endTime, description, link, assignmentLink}, context) => {
            if(!authorization(context)){
                return await updateLecture({id, title, date, startTime, endTime, description, link, assignmentLink})
            }
        },
        deleteLecture: async (_, {id}, context) => {
            if(!authorization(context)){
                return await deleteLecture(id)
            }
        },

        createDiscussion: async (_, {message, timestamp}, context) => {},
        updateDiscussion: async (_, {id, message, timestamp}, context) => {},
        deleteDiscussion: async (_, {id}, context) => {},
    },
};

module.exports = resolvers;
