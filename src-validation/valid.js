const validEmail=(email)=>{
     return email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
}


const validPass=(password)=>{
    return password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/)
}


const validPhone=(mobile)=>{
    return mobile.match(/^([9]{1})([234789]{1})([0-9]{8})$/)
}

module.exports={validEmail,validPass,validPhone}