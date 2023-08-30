import Home from './pages/Home.jsx'
import Layout from './layouts/Layout.jsx'

function App() {
  return (
    <>
        <Layout>
          <Home/>
        </Layout>
        <div className='bg-[url("../public/images/background-mobile-home-naruto.svg")] bg-cover bg-start w-full md:bg-none'> 
      </div>
    </>
  )
}

export default App


