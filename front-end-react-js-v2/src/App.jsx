import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
