/********************************* 
 *                               *
 *                               *
 *      Dummy Sign Up            *
 *                               *
 *                               *
 *                               *
 * *******************************/



import { signIn} from "next-auth/react";

const handleSignUp = () => {
    let email = "a@l.c";
    let password = "123456";
    fetch('/api/user/signup', {
        method: 'POST',
        headers: {
            "Accept": "application/json"
        },
        body: new URLSearchParams(`name=Suman Mandal&email=${email}&password=123456`)
    })
        .then(res => {
            console.log(res.status);
            if(res.status === 201){
                signIn('credentials',{callbackUrl:"/",email:email,password:password})
            }
            return res.json()
        }).then(res=>console.log(res))

}

export default function SignUp() {

    return (
        <button onClick={handleSignUp}>Sign Up</button>
    )
}