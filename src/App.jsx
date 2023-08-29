import Home from './pages/Home.jsx'
import Layout from './layouts/Layout.jsx'

function App() {
  return (
    <>
      <div className='bg-[url("../public/images/background-mobile-home-naruto.svg")] bg-cover bg-start w-full md:bg-none'>   
        <Layout>
          <Home/>
        </Layout>
      </div>
    </>
  )
}

export default App


