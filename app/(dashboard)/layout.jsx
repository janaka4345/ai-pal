import SideBar from "@/components/custom/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="h-full w-full relative flex flex-row">
        <div className="w-fit h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
          <SideBar />
        </div>
        <main className="w-full md:pl-72 pb-10 ">
          {/* TODO */}
          {/* <Suspense fallback={<h1>loading..</h1>}>{children}</Suspense> */}
          {children}
        </main>
      </div>
    </>
  );
}
