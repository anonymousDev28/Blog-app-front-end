
import './App.css'
import Layout from './component/layout'
import BlogDetail from './pages/blog/BlogDetail'
import Category from './pages/category/Category'
import CategoryDetail from './pages/category/CategoryDetail'
import Home from './pages/home/Home'
import Search from './pages/search/Search'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="search" element={<Search/>}></Route>

          <Route path="categories">
            <Route index element={<Category/>}>
            <Route path=":categoryName" element={<CategoryDetail/>}></Route>
            </Route>
          </Route>

          <Route path="blogs/:blogId/:blogSlug" element={<BlogDetail/>}>

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
