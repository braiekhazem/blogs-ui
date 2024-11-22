import sharedRoutes from './sharedRoutes'
import authRoutes from '../../auth/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'

import todoRoutes from '../../todoRedux/routes/routes'
import todoRTKRoutes from '../../todoRTK/routes/routes'

const routes = [...sharedRoutes, ...authRoutes, ...dashboardRoutes, ...todoRoutes, ...todoRTKRoutes]

export default routes
