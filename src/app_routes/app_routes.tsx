// React
import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

// Pages
const OpeningPage = lazy(() => import('../pages/opening_page'))
const HomePage = lazy(() => import('../pages/home_page/home_page'))


export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<OpeningPage></OpeningPage>}></Route>
          <Route
            path="/home"
            element={<HomePage></HomePage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
