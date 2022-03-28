import DashboardLayout from '../../layout'

export default function NotFound() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center w-screen h-screen">
        <img src="https://http.cat/404" alt="404 Not Found" className="block" />
      </div>
    </DashboardLayout>
  )
}
