import {Column} from "../components/column.jsx"
import {Row} from "../components/row.jsx"

export const SiteHeader = () => {
    return (
        <Column>
        <Row>
            <h1>Eccomerce App</h1>
            <Row>
                <button>Cart</button>
                <button>Sign Up</button>
                <button>Log In</button>
            </Row>
        </Row>
        </Column>
    )
}