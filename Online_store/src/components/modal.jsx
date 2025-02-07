import {Column} from "./components/column.jsx"
import {Row} from "./components/row.jsx"

export const Modal = ({children, setVisibility}) => {
    return (
        <div>
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    top:"50%",
                    left:"50%",
                    transform: "translate(-50%,-50%)",
                    position: "absolute",
                }}
                onClick={() => setVisibility(false)}
            >
            </div>
            <column
                style={{
                    position: "fixed",
                    top:"50%",
                    left:"50%",
                    minWidth: "60vh",
                    maxHeight: "90vh",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "black",
                    border: "2px solid white",
                    borderRadius: "8px",
                    padding: "16px",
                    
                }}
            >
            <row
                style={{
                    justifyContent: "flex-end",
                }}  
            >
                <button onClick={() => setVisibility(false)}>X</button>
            </row>  
            {children}
            </column>
        </div>
    )
}