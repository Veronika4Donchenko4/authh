import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"


export const Auth = () => {
    return(
        <div>
            <input placeholder="Email...."/>
            <input placeholder="Pasword...." />
            <button>Sign In</button>
        </div>
    );
};