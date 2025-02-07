import {Row} from "./row.jsx"
export const InputField = ({label, value, setValue, type="text"}) => {
    return (
        <Row>
            <label htmlFor="input" 
                style= {{
                    flex: 1
                }}>
                {label}
            </label>
            <input
            name="input"
            style={{
                flex: 3
            }}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </Row>
    )
}