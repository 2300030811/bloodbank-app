import React, { useState } from 'react';
import { Package, AlertTriangle } from 'lucide-react';
import Card from '../components/Card';
import Table from '../components/Table';
import PopupModal from '../components/PopupModal';

const Inventory = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ type: 'info', title: '', message: '' });

  // Sample blood inventory data
  const bloodInventory = [
    { id: 1, bloodGroup: 'A+', unitsAvailable: 50, expiryDate: '2025-03-15', status: 'Available' },
    { id: 2, bloodGroup: 'A-', unitsAvailable: 5, expiryDate: '2025-02-28', status: 'Low Stock' },
    { id: 3, bloodGroup: 'B+', unitsAvailable: 30, expiryDate: '2025-04-10', status: 'Available' },
    { id: 4, bloodGroup: 'B-', unitsAvailable: 2, expiryDate: '2025-03-05', status: 'Critical' },
    { id: 5, bloodGroup: 'AB+', unitsAvailable: 20, expiryDate: '2025-03-20', status: 'Available' },
    { id: 6, bloodGroup: 'AB-', unitsAvailable: 1, expiryDate: '2025-02-25', status: 'Critical' },
    { id: 7, bloodGroup: 'O+', unitsAvailable: 40, expiryDate: '2025-04-05', status: 'Available' },
    { id: 8, bloodGroup: 'O-', unitsAvailable: 6, expiryDate: '2025-03-12', status: 'Low Stock' },
  ];

  // Get Tailwind color class based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Table columns
  const columns = [
    { key: 'bloodGroup', label: 'Blood Group' },
    { key: 'unitsAvailable', label: 'Units Available' },
    { key: 'expiryDate', label: 'Expiry Date' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(value)}`}>
          {value}
        </span>
      ),
    },
  ];

  // Modal handlers
  const handleEdit = (row) => {
    setModalData({
      type: 'info',
      title: 'Edit Blood Unit',
      message: `Editing ${row.bloodGroup} blood group inventory. This feature would open an edit form in a full implementation.`,
    });
    setShowModal(true);
  };

  const handleDelete = (row) => {
    setModalData({
      type: 'error',
      title: 'Delete Confirmation',
      message: `Are you sure you want to remove ${row.bloodGroup} from inventory? This action cannot be undone.`,
    });
    setShowModal(true);
  };

  const criticalStock = bloodInventory.filter(item => item.status === 'Critical');
  const lowStock = bloodInventory.filter(item => item.status === 'Low Stock');

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Package className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blood Inventory</h1>
          <p className="text-lg text-gray-600">Current blood stock levels and availability status</p>
        </div>

        {/* Alert Cards */}
        {(criticalStock.length > 0 || lowStock.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {criticalStock.length > 0 && (
              <Card className="border-red-200 bg-red-50">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">Critical Stock Alert</h3>
                    <p className="text-red-700">
                      {criticalStock.length} blood group{criticalStock.length !== 1 ? 's' : ''} at critical levels
                    </p>
                    <p className="text-sm text-red-600 mt-1">
                      {criticalStock.map(item => item.bloodGroup).join(', ')}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {lowStock.length > 0 && (
              <Card className="border-yellow-200 bg-yellow-50">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800">Low Stock Warning</h3>
                    <p className="text-yellow-700">
                      {lowStock.length} blood group{lowStock.length !== 1 ? 's' : ''} running low
                    </p>
                    <p className="text-sm text-yellow-600 mt-1">
                      {lowStock.map(item => item.bloodGroup).join(', ')}
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {bloodInventory.reduce((sum, item) => sum + item.unitsAvailable, 0)}
              </div>
              <div className="text-gray-600">Total Units</div>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {bloodInventory.filter(item => item.status === 'Available').length}
              </div>
              <div className="text-gray-600">Available Types</div>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{lowStock.length}</div>
              <div className="text-gray-600">Low Stock</div>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{criticalStock.length}</div>
              <div className="text-gray-600">Critical</div>
            </div>
          </Card>
        </div>

        {/* Inventory Table */}
        <Card title="Blood Inventory Details">
          <Table columns={columns} data={bloodInventory} onEdit={handleEdit} onDelete={handleDelete} />
        </Card>
      </div>

      {/* Modal */}
      <PopupModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalData.type}
        title={modalData.title}
        message={modalData.message}
      />
    </div>
  );
};

export default Inventory;
