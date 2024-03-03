var btn = document.getElementById('btn')
btn.onclick = function check(){
    function checkpwd1(){
    var pwd1 = document.getElementById('pwd1').value
    var reg = /^[0-9a-zA-Z]{8-15}$/
    if (pwd1 == '' || pwd1 == null){
        alert('修改密码不能为空')
    }else if (reg.test(pwd1)){
        return true
    }else {
        alert('密码太简单或不满足要求')
    }
    }
    function checkpwd2(){
        var pwd1 = document.getElementById('pwd1').value
        var pwd2 = document.getElementById('pwd2').value
        if (pwd2 == '' || pwd2 == null){
            alert('确认密码不能为空')
        }else if (pwd1 == pwd2){
            alert('密码修改成功')
            return true
        }else{
            alert('两次输入密码不一致')
        }
    }
    console.log(checkpwd1)
    console.log(checkpwd2)
    // var pwd1 =document.getElementById("pwd1").value
    // var pwd2 = document.getElementById("pwd2").value
    // if(pwd1!=pwd2){
    //     alert('两次输入密码不一致，请重新输入')
    // }
}