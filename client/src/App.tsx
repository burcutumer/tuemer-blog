
import { Outlet } from 'react-router-dom'
import EntryListComponent from './components/EntryListComponent'
import HeaderComponent from './components/HeaderComponent'
import NavComponent from './components/NavComponent'

function App() {
  return (
    <main className='flex flex-col w-full mx-auto my-3 h-screen'>
      <div className='sticky w-full top-0 left-0 right-0'>
        <div className='h-full flex flex-col'>
          <HeaderComponent />
          <NavComponent />
        </div>

      </div>
      <div className='flex flex-grow overflow-hidden '>
        <div className='w-1/6 overflow-auto'>
          <EntryListComponent />
        </div>
        <div className="w-5/6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default App
