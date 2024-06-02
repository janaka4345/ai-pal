import SideBar from '@/components/custom/SideBar'

export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="relative flex h-full w-full flex-row">
                <div className="z-80 h-full w-fit bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
                    <SideBar />
                </div>
                <main className="w-full pb-10 md:pl-72">
                    {/* TODO */}
                    {/* <Suspense fallback={<h1>loading..</h1>}>{children}</Suspense> */}
                    {children}
                </main>
            </div>
        </>
    )
}
