import {Column} from "../components/column.jsx"
import {Row} from "../components/row.jsx"

export const SiteHeader = () => {
    return (
        <column>
        <row>
            <h1>Eccomerce App</h1>
            <row>
                <button>Cart</button>
                <button>Sign Up</button>
                <button>Log In</button>
            </row>
        </row>
        </column>
    )
}