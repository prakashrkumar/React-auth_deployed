import { NavLink } from 'react-router'
import { Button } from './ui/button'
import useAuth from '@/auth/Store'

const Navbar = () => {
  const checkLogin = useAuth((state) => state.checkLogin)
  const user = useAuth((state) => state.user)
  const logout = useAuth((state) => state.logout)

  return (
    <nav className="border-b border-gray-700 flex h-14 items-center justify-between px-6">

      {/* Brand */}
      <div className="font-semibold flex items-center gap-2">
        <span className="inline-flex items-center justify-center rounded-md h-7 w-7 bg-gradient-to-r from-primary to-primary/40 text-sm font-bold">
          A
        </span>
        <span className="text-base tracking-tight">Auth App</span>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-3">
        {checkLogin() ? (
          <>
            <NavLink to={"#!"} className="text-sm">
              {user?.name}
            </NavLink>
            <Button
              onClick={() => { logout() }}
              size="sm"
              variant="outline"
              className="cursor-pointer"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/" className="text-sm px-2">
              Home
            </NavLink>
            <NavLink to="/login">
              <Button size="sm" variant="outline" className="cursor-pointer">
                Login
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button size="sm" variant="outline" className="cursor-pointer">
                Signup
              </Button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
