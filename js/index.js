const users = []; 

document.getElementById('clickStart').addEventListener('click', function(){
    const userNameInput = document.getElementById('userNameInput');
    if(userNameInput.value === ""){
    alert("Please enter a username");
     } else{
        let userName = userNameInput.value;
        let user = {
            userName: userName,
            score: 0
        }
        users.push(user); 
        location.href = "./html/question.html"; 
        localStorage.setItem('users', JSON.stringify(users));
    }
});



//Store Leaderboard in local storage
