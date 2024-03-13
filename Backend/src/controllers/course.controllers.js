const { CourseModel } = require("../models/course.model");


const createCourse = async (data, context)=>{
    const {name, prerequisites, description} = data;
    try {
        if(!name || !prerequisites || !description){
            throw new Error("All Fields are required")
        }
        if(!context.user){
            throw new Error('You must be logged in to do this');
        }
        if (context.user.role !== 'Admin') {
            throw new Error('You must be an admin to do this');
        }

        const course = await CourseModel.create({name, prerequisites, description});
        if(!course){
            throw new Error('Unable to create the course at that moment');
        }

        return course
    } catch (error) {
        throw error;
    }
}

module.exports = {createCourse}