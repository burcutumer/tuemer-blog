import './App.css'
import EntryFeedComponent from './components/EntryFeedComponent'
import EntryListComponent from './components/EntryListComponent'
import HeaderComponent from './components/HeaderComponent'
import NavComponent from './components/NavComponent'

function App() {
  return (
    <>
      <main className='flex flex-col w-[1300px] mx-auto my-3 h-screen'>
        <div className='fixed w-[1300px] top-0 left-0 right-0'>
          <HeaderComponent />
          <NavComponent />
        </div>
        <div className='flex flex-grow overflow-hidden mt-20'>
          <div className='w-1/6 overflow-auto'>
            <EntryListComponent />
          </div>
          <div className="w-5/6">
            <EntryFeedComponent />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
