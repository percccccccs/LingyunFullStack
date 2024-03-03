var btn = document.getElementById('button')
btn.onclick = function randomPassword(){
    const numbers = '0123456789'
    const lowerCaseLetter = 'zxcvbnmlkjhgfdsaqwertyuiop'
    const upperCaseLetter = 'ZXCVBNMLKJHGFDSAQWERTYUIOP'
    const characters = numbers + lowerCaseLetter + upperCaseLetter
    function randomString(length){
        let result = ''
        for(let i = 0; i < length; i++){
            result += characters[Math.floor(Math.random() * characters.length)]
        }
        return result
        }
    document.getElementById('password').innerHTML = randomString(10)
    document.getElementById('random').innerHTML = '重置密码为'
}
// document.getElementById('password').innerHTML = randomPassword(10)
// document.getElementById('random').innerHTML = '重置密码为'


