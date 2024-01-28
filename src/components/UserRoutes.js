import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const Cast = lazy(() => import('./pages/Cast/Cast'));


const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<MovieDetails />}>
                    <Route path="reviews" element={<Reviews />}></Route>
                    <Route path="cast" element={<Cast />}></Route>
                </Route>

                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;