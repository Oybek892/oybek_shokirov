import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { About } from "./pages/about/about"
import { Home } from "./pages/home/home"
import { Routes, Route } from "react-router-dom"
import Shop from "./pages/shop/shop"
import ShopMore from "./pages/shop-more/shop-more"
import { MainLayout } from "./layout/main-layout"

function App() {


  return (
    <>

      <Routes path='/' element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shopmore/:slug' element={<ShopMore />} />
      </Routes>
    </>
  )
}

export default App
