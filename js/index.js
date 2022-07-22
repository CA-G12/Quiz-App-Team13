const users = []; 


initUser();


// function to initialize user //
function initUser(){
    let userId = 0; 
    if(localStorage.getItem('users') === null){
         userId = 0;
    } else{
        let usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
         userId = usersFromLocalStorage.length;
    }
    saveUser(userId); 
    loadLeaderBorad();
}

// function to load leader board //
function loadLeaderBorad(){
    let usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
    let sortedScore = usersFromLocalStorage.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
    for(let i =0; i < 5; i++){
        let user = sortedScore[i];
        let userTd = document.createElement('tr');
        userTd.innerHTML = `<td>${user.userName}</td><td>${user.score}</td>`;
        document.getElementById('leaderBoardTable').appendChild(userTd);
    }
}

// function to save user //
function saveUser(userId){
document.getElementById('clickStart').addEventListener('click', function(){
    const userNameInput = document.getElementById('userNameInput');
    if(userNameInput.value === ""){
         document.getElementById('userNameError').innerHTML = "الرجاء إدخال اسم المستخدم";
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

