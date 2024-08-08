'use client'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
// import { authLoginAction } from '../../../serverActions/auth/authLoginAction'

export default function SocialAuth() {
    const handleClick = async (provider) => {
        await signIn(provider, {
            redirect: true,
            callbackUrl: '/dashboard',
        })
    }
    return (
        <>
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                type="button"
                // disabled={isLoading}
                onClick={() => handleClick('google')}
            >
                {/* {isLoading ? (
           <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
           <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "} */}
                Google
            </Button>
            {/* <Button
                variant="outline"
                type="button"
                // disabled={isLoading}
                onClick={() => handleClick('facebook')}
            > */}
            {/* {isLoading ? (
           <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
           <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "} */}
            {/* Facebook
            </Button> */}
            <Button
                variant="outline"
                type="button"
                // disabled={isLoading}
                onClick={() => handleClick('github')}
            >
                {/* {isLoading ? (
           <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
           <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "} */}
                GitHub
            </Button>

            {/* <div className="mt-4 flex flex-col gap-4">
              <form
                  action={async () => {
                      'use server'
                      await authLoginAction('github')
                  }}
              >
                  <Button
                      type="submit"
                      className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
                      // onClick={() => handleClick("github")}
                  >
                      <svg
                          className="me-2 h-4 w-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                      >
                          <path
                              fillRule="evenodd"
                              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                              clipRule="evenodd"
                          />
                      </svg>
                      Sign in with Github
                  </Button>
              </form>
              <form
                  action={async () => {
                      'use server'
                      await authLoginAction('google')
                  }}
              >
                  <Button
                      type="submit"
                      variant="none"
                      // style={{
                      //   background: "rgb(66, 133, 244)",
                      //   background:
                      //     "linear-gradient(90deg, rgba(66,133,244,1) 0%, rgba(52,168,83,1) 35%, rgba(251,188,5,1) 70%, rgba(234,67,53,1) 100%)",
                      // }}
                      className="mb-2 me-2 inline-flex items-center rounded-lg bg-[rgba(66,133,244,1)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[rgba(66,133,244,0.8)] focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
                      // onClick={() => handleClick("google")}
                  >
                      <svg
                          className="me-2 h-4 w-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 18 19"
                      >
                          <path
                              fillRule="evenodd"
                              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                              clipRule="evenodd"
                          />
                      </svg>
                      Sign in with Google
                  </Button>
              </form>
          </div> */}
        </>
    )
}
