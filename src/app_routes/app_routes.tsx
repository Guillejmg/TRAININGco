// React
import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

// Pages
const OpeningPage = lazy(() => import('../pages/opening_page/opening_page'))
const HomePage = lazy(() => import('../pages/home_page/home_page'))
const UsPage = lazy(() => import('../pages/us_page/us_page'))
const ContactPage = lazy(() => import ('../pages/contact_page/Contact_page'))

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route 
            path="/" 
            element={<OpeningPage></OpeningPage>}>
          </Route>
          <Route
            path="/home"
            element={<HomePage></HomePage>}>
            </Route>
            <Route
            path="/us"
            element={<UsPage></UsPage>}
          ></Route>
          <Route path="/contact"
          element={<ContactPage></ContactPage>}>
            
          </Route>
        </Routes>
      </Suspense>
    </main>
  )
}
