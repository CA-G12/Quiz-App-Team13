const users = []; 
let userId = 0;

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
        userId += 1; 
        users.push(user); 
        location.href = "./html/question.html?userId="+user.id; 
        localStorage.setItem('users', JSON.stringify(users));
    }

});



//Store Leaderboard in local storage
