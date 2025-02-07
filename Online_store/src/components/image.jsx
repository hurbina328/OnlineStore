import Placeholder from "../assets/placeholder.jpg";
export const Image = ({src, alt, style}) => {
    return (
        <div
            style={{
                display: flex,
                placeItems: center,
                border: "1px solid lightgray",
                minHeight:"200px",
                backgroundColor:"white",
                ...style,
            }}
        >
            <img 
                src={src} 
                title={title} 
                alt={alt} 
                style={{
                    width: "100%",
                    ...style,
            }}
            />
        </div>
    );
};