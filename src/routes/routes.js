
// File bao gồm path (dưới dạng biến) và component (page) khi truy cập vào path đó
// public laf các link không cần login vẫn có thể vào được, private là cần phải login  

import routes from './routesConfig'
import Home from '../page/Home'
import Explore from '../page/Explore'

const publicRoutes = [
    { path: routes.home, component: <Home/> },
    { path: routes.explore, component: <Explore/>},
    { path: routes.messages},
    { path: routes.profile},
]

const privateRoutes = []
export {publicRoutes , privateRoutes}