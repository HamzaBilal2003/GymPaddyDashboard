import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../components/Modal';

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: {
    businessName: string;
    category: string;
    email: string;
    phone: string;
    document: string;
    status: 'approved' | 'pending' | 'rejected';
  };
}

const categories = [
  'Gym Equipments',
  'Personal Training',
  'Nutrition Supplements',
  'Fitness Apparel',
  'Wellness Services',
  'Gym Wears'
];

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business name is required'),
  category: Yup.string().required('Category is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  document: Yup.string().required('Document is required'),
  status: Yup.string().required('Status is required'),
  rejectionReason: Yup.string().when('status', {
    is: 'rejected',
    then: (schema) => schema.required('Rejection reason is required'),
    otherwise: (schema) => schema.optional(),
  }),
});

const VerifyModal: React.FC<BusinessModalProps> = ({ isOpen, onClose, business }) => {
  const [selectedStatus, setSelectedStatus] = useState(business.status);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{
          businessName: business.businessName,
          category: business.category,
          email: business.email,
          phone: business.phone,
          document: business.document,
          status: business.status,
          rejectionReason: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form values:', values);
          onClose();
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="p-6 space-y-6">
            <div className="space-y-4">
              {/* Business Name */}
              <div>
                <Field
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.businessName && touched.businessName && (
                  <div className="text-red-500 text-sm mt-1">{errors.businessName}</div>
                )}
              </div>

              {/* Category */}
              <div className="relative">
                <Field
                  as="select"
                  name="category"
                  className="w-full  px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Field>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                {errors.category && touched.category && (
                  <div className="text-red-500 text-sm mt-1">{errors.category}</div>
                )}
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              {/* Phone */}
              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.phone && touched.phone && (
                  <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                )}
              </div>

              {/* Document (Image or Preview link) */}
              <div>
                <Field
                  name="document"
                  type="text"
                  disabled
                  placeholder="Document"
                  className="w-full hidden px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 cursor-not-allowed"
                />
                {errors.document && touched.document && (
                  <div className="text-red-500 text-sm mt-1">{errors.document}</div>
                )}
                <div className="mt-2 border border-gray-300 py-4">
                  <img
                    src={business.document}
                    alt="Uploaded document"
                    className="max-h-32 mx-auto rounded"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="relative">
                <Field
                  as="select"
                  name="status"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue('status', e.target.value);
                    setSelectedStatus(e.target.value as 'approved' | 'pending' | 'rejected');
                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </Field>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                {errors.status && touched.status && (
                  <div className="text-red-500 text-sm mt-1">{errors.status}</div>
                )}
              </div>

              {/* Rejection Reason (Conditional) */}
              {selectedStatus === 'rejected' && (
                <div>
                  <Field
                    name="rejectionReason"
                    as="textarea"
                    placeholder="Reason ..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 max-h-[100px] overflow-auto"
                  />
                  {errors.rejectionReason && touched.rejectionReason && (
                    <div className="text-red-500 text-sm mt-1">{errors.rejectionReason}</div>
                  )}
                </div>
              )}
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default VerifyModal;
