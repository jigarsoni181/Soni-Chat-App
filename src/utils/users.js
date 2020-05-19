const users = []

//adduser, removeuser , getuser , getuserinroom

const addUser = ({id , username , room}) => {

    //clean the data

    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //validate the data

    if(!username || !room){
        return {
            error : 'username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username 
    })

    // validate username

    if(existingUser){
        return {
            error : 'Username is in use!'
        }
    }

    //store user

    const user = {id , username , room}
    users.push(user);
    return{user};
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id);

    if(index !== -1){
         return users.splice(index , 1)[0];
    }
}

const getUser = (id)=>{
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user)=> user.room === room);
}

module.exports = {
    getUser,
    getUsersInRoom,
    removeUser,
    addUser
}

// addUser({
//     id:122,
//     username : 'JiGar',
//     room:'jarVIGS'
// })

// addUser({
//     id:12,
//     username : 'JiGr',
//     room:'cmpn'
// })

// addUser({
//     id:12,
//     username : 'ravu',
//     room:'cmpn'
// })

// const res = getUsersInRoom('cmpn');
// console.log(res);

// console.log(users)
// const removedUser =removeUser(122);
// console.log(removedUser)
// console.log(users)

// console.log(users)

// const res = addUser({
//     id:444,
//     username : '',
//     room:'jarVIGS'
// })

// console.log(res);