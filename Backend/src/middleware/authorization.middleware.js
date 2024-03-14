const authorization = (context)=>{
    if(!context.user){
        throw new Error('You must be logged in to do this');
    }
    if (context.user.role !== 'Admin') {
        throw new Error('You must be an admin to do this');
    }
}
module.exports  = authorization