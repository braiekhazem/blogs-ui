import routes, { renderRoutes } from '@src/modules/shared/routes'
import { useAppSelector } from '@src/modules/shared/store'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import ThemeToggler from './ThemeToggler'
// import { AbilityContextProvider } from '@src/modules/shared/contexts/AbilityContext'

const App = () => {
  // get translation.json file from public/locales
  const { i18n } = useTranslation('translation')

  document.body.dir = i18n?.dir()

  const theme = useAppSelector((state) => state.theme.mode)
  const { user } = useAppSelector((state) => state?.auth)
  console.log(user)

  return (
    <div id={theme}>
      <Helmet>
        <title>Welcome - React starter</title>
      </Helmet>

      {/* <ThemeToggler /> */}

      {/* add AbilityProvider if needed
      <AbilityContextProvider roles={user?.roles}> */}
      {renderRoutes(routes)}
      {/* </AbilityContextProvider> */}
    </div>
  )
}

export default App
