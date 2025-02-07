import {Column} from "../components/column.jsx"
import {Row} from "../components/row.jsx"
import {Login} from "./Login.jsx"

export const SiteHeader = () => {
    return (
        <Column>
        <Row>
            <h1>Eccomerce App</h1>
            <Row>
                <button>🛒</button>
                <button>Sign Up</button>
                <Login />
            </Row>
        </Row>
        </Column>
    )
}