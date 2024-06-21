import SideBar from '@/components/custom/SideBar'
import { Suspense } from 'react'

export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="relative flex h-[calc(100dvh-10dvh)] w-full flex-row overflow-hidden">
                <div className="h-full w-1/5 bg-gray-900 pl-4">
                    <SideBar />
                </div>
                <main className="w-4/5 pb-10 pl-4">
                    {/* TODO */}
                    <Suspense fallback={<h1>loading..</h1>}>
                        {children}
                    </Suspense>
                    {/* {children} */}
                </main>
            </div>
        </>
    )
}
