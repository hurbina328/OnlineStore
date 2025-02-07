import './App.css'
import { column } from './components/column'
import { SiteHeader } from './components/siteHeader'
import { TestModal } from './components/testModal'

function App() {
  return (
    <column>
      <SiteHeader />
      <TestModal />
    </column>
  )
}

export default App
