const users = []; 

initUser();

function initUser(){
    let userId = 0; 
    if(localStorage.getItem('users') === null){
         userId = 0;
    } else{
        let usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
         userId = usersFromLocalStorage.length;
    }
    saveUser(userId); 
}

function saveUser(userId){
document.getElementById('clickStart').addEventListener('click', function(){
    const userNameInput = document.getElementById('userNameInput');
    if(userNameInput.value === ""){
         alert("Please enter a username");
     } else{
        let userName = userNameInput.value;
        let user = {
            id: userId,
            userName: userName,
            score: 0
        }
       
        if(userId === 0){
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        } else{
            let usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
            usersFromLocalStorage.push(user); 
            localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));
        }
        userId += 1; 
        location.href = "./html/question.html?userId="+user.id; 
    }

});
}


//Store Leaderboard in local storage
