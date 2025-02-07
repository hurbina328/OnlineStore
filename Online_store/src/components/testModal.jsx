import { useState } from 'react';
import { Modal } from './components/modal.jsx';

export const TestModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    if(!isVisible) return <button onClick={() => setIsVisible(true)}>Show Modal</button>

    return (
        <modal setVisibility={setIsVisible}>
            <p>Test Modal</p>
        </modal>
    )
}