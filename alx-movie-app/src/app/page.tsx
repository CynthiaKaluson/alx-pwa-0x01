export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          🎬 Cine Seek
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Progressive Web App for movie discovery
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">PWA Features Enabled:</h2>
          <ul className="text-left space-y-3 text-lg">
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✅</span>
              Service Worker & Offline Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✅</span>
              Web App Manifest
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✅</span>
              Installable on Devices
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✅</span>
              Responsive Design
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✅</span>
              Fast Loading
            </li>
          </ul>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Check Chrome DevTools → Application tab to verify PWA features</p>
        </div>
      </div>
    </main>
  )
}
