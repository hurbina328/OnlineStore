import { useState } from 'react';
import { Modal } from "./modal.jsx";

export const TestModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    if(!isVisible) return <button onClick={() => setIsVisible(true)}>Show Modal</button>

    return (
        <Modal setVisibility={setIsVisible}>
            <p>Test Modal</p>
        </Modal>
    )
}