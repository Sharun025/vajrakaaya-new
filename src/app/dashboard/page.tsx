export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Vajrakaaya Dashboard
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Construction Site Management Dashboard
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Sites</h3>
                  <p className="text-3xl font-bold text-blue-600">5</p>
                  <p className="text-sm text-gray-500">Active Projects</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Vehicles</h3>
                  <p className="text-3xl font-bold text-green-600">12</p>
                  <p className="text-sm text-gray-500">Available</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Materials</h3>
                  <p className="text-3xl font-bold text-orange-600">25</p>
                  <p className="text-sm text-gray-500">In Stock</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900">Expenses</h3>
                  <p className="text-3xl font-bold text-red-600">₹2.5M</p>
                  <p className="text-sm text-gray-500">This Month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sites</h3>
                  <p className="text-gray-600">Manage construction sites and projects</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vehicles</h3>
                  <p className="text-gray-600">Track vehicles and equipment</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Materials</h3>
                  <p className="text-gray-600">Manage inventory and materials</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expenses</h3>
                  <p className="text-gray-600">Track project expenses</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reports</h3>
                  <p className="text-gray-600">Generate reports and analytics</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Settings</h3>
                  <p className="text-gray-600">Configure application settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
