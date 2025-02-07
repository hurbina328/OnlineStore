import './App.css'
import { Column } from './components/column.jsx'
import { SiteHeader } from './components/siteHeader.jsx'
import { TestModal } from './components/testModal.jsx'

function App() {
  return (
    <Column>
      <SiteHeader />
      <TestModal />
    </Column>
  )
}

export default App
