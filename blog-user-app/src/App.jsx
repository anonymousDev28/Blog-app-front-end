import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BlogDetail from "./pages/blog/BlogDetail";
import CategoryDetail from "./pages/category/CategoryDetail";
import CategoryList from "./pages/category/CategoryList";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/not-found/NotFound";
import SeachPage from "./pages/search/SeachPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="search" element={<SeachPage />} />

                    <Route path="categories">
                        <Route index element={<CategoryList />} />
                        <Route
                            path=":categoryName"
                            element={<CategoryDetail />}
                        />
                    </Route>

                    <Route
                        path="/blogs/:blogId/:blogSlug"
                        element={<BlogDetail />}
                    />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
