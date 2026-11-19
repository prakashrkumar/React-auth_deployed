import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa6'

const BACKEND_URL = "https://spring-boot-auth-1.onrender.com"

const OAuth2Button = () => {
  return (
    <div className="grid grid-cols-2 gap-3">

      {/* Google */}
      <a href={`${BACKEND_URL}/oauth2/authorization/google`}>
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl border-white/10 bg-white/[0.04] text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5 shrink-0" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" transform="translate(0 4)" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.73 7.18l7.66 5.95c4.48-4.14 7.11-10.24 7.11-17.6Z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.3 14.3 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.86.93 7.5 2.56 10.78l7.97-6.19Z" transform="translate(0 4)" />
            <path fill="#34A853" d="M24 48c6.47 0 11.91-2.13 15.87-5.8l-7.66-5.95c-2.13 1.45-4.85 2.3-8.21 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" transform="translate(0 -4)" />
          </svg>
          Google
        </Button>
      </a>

      {/* GitHub */}
      <a href={`${BACKEND_URL}/oauth2/authorization/github`}>
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl border-white/10 bg-white/[0.04] text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          <FaGithub size={18} className="mr-2 shrink-0" />
          GitHub
        </Button>
      </a>

    </div>
  )
}

export default OAuth2Button
