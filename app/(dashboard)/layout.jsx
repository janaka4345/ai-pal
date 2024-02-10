export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="hidden md:block max-h-screen h-svh bg-primary w-1/4 text-primary-foreground">
        dashboard layout
        {children}
      </div>
    </>
  );
}
