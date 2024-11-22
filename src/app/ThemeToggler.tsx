import { useAppDispatch, useAppSelector } from '@src/modules/shared/store'
import { toggleTheme } from '@src/modules/shared/store/slices/theme/themeSlice'

const ThemeToggler = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.theme)

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <h1>{mode}</h1>
      <button onClick={handleThemeChange}>toggle theme</button>
    </div>
  )
}

export default ThemeToggler
