import { useState } from 'react';
import { Modal } from "./modal.jsx";
import {InputField} from "./InputField.jsx"
export const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    if(!isVisible) return <button onClick={() => setIsVisible(true)}>Log In</button>

    return (
        <Modal setVisibility={setIsVisible}>
            <InputField
                label="Email:"
                value={email}
                setValue={setEmail}
            />
            <InputField
                label="Password:"
                value={password}
                setValue={setPassword}
                type="password"
            />
            <button>Log In</button>
        </Modal>
    )
}