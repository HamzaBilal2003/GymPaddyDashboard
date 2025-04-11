import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import images from '../../../../constants/images';
import VerifyModal from '../../../verification/components/VerifyModal';
import { useLocation, useParams } from 'react-router-dom';
import HeaderWrapper from '../../components/HeaderWrapper';

const businessData = {
    businessName: 'Qamardeen Maleek',
    category: 'Fitness',
    email: 'qamardeenoladimeji@gmail.com',
    phone: '07033484845',
    document: images.admin,
    status: 'pending' as 'pending' | 'approved' | 'rejected'
};

const UserVerification: React.FC = () => {
    const { username } = useParams();
    const location = useLocation();
    const [activeTab, setactiveTab] = useState('all')
    const [isEditModal, setIsEditModal] = useState(false);

    const handleEdit = () => {
        setIsEditModal(true);
    };

    return (
        <HeaderWrapper
            location={location}
            user={username}
            activeTab={activeTab}
            setActiveTab={setactiveTab}
        >
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-red-900 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-[300px_1fr_400px] gap-6 p-8">
                            {/* Left Section - Profile Info */}
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                        alt={businessData.businessName}
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    {businessData.status === 'approved' ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-500 absolute bottom-4 right-0" />
                                    ) : (
                                        <X className="w-6 h-6 text-red-500 absolute bottom-4 right-0" />
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-1">
                                    {businessData.businessName}
                                </h2>
                                <p className="text-red-200 mb-4">{businessData.category}</p>
                                <p className="text-red-300 text-sm mb-6">
                                    {businessData.status}
                                </p>
                                <button
                                    onClick={handleEdit}
                                    className="bg-white text-red-600 px-8 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
                                >
                                    View
                                </button>
                            </div>

                            {/* Middle Section - Business Info */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-red-200 text-sm">Business Name</p>
                                    <p className="text-white font-semibold">{businessData.businessName}</p>
                                </div>
                                <div>
                                    <p className="text-red-200 text-sm">Business Category</p>
                                    <p className="text-white font-semibold">{businessData.category}</p>
                                </div>
                                <div>
                                    <p className="text-red-200 text-sm">Business Email</p>
                                    <p className="text-white font-semibold">{businessData.email}</p>
                                </div>
                                <div>
                                    <p className="text-red-200 text-sm">Phone no</p>
                                    <p className="text-white font-semibold">{businessData.phone}</p>
                                </div>
                            </div>

                            {/* Right Section - Additional Info */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-red-200 text-sm">Certificate Image</p>
                                    <div className="mt-2 bg-white rounded-lg p-4 w-full">
                                        <img
                                            src={businessData.document}
                                            alt="Certificate"
                                            className="w-20 h-auto rounded block mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VerifyModal
                        isOpen={isEditModal}
                        onClose={() => setIsEditModal(false)}
                        business={businessData}
                    />
                </div>
            </div>
        </HeaderWrapper>
    );
}

export default UserVerification;