const user = document.querySelector('.username')

const btn = document.querySelector('.btn-submit')

function clickEventHandler(){
    user.value ==='superadmin' ? window.location.href="./frameMain.html" : user.value ==='admin' ? window.location.href="./main.html": window.location.href="./empDetails.html"
};

btn.addEventListener("click",clickEventHandler)
console.log(user.value)
