import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Vertical from '../../components/alignments/Vertical';
import { Link } from 'react-router-dom';

interface CostConfig {
  videoCallCost: string;
  liveCost: string;
  vipPlanCost: string;
}

const validationSchema = Yup.object().shape({
  videoCallCost: Yup.number()
    .typeError('Cost must be a number')
    .required('Video call cost is required')
    .min(0, 'Cost cannot be negative')
    .max(999999, 'Cost is too high'),
  liveCost: Yup.number()
    .typeError('Cost must be a number')
    .required('Live cost is required')
    .min(0, 'Cost cannot be negative')
    .max(999999, 'Cost is too high'),
  vipPlanCost: Yup.number()
    .typeError('Cost must be a number')
    .required('VIP plan cost is required')
    .min(0, 'Cost cannot be negative')
    .max(999999, 'Cost is too high'),
});

const Setting: React.FC = () => {
  const initialValues: CostConfig = {
    videoCallCost: '',
    liveCost: '',
    vipPlanCost: '',
  };

  const handleSubmit = (values: CostConfig) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <>
      <Vertical>
        <h1 className='text-2xl font-bold mb-4'>Settings</h1>
        <Link to={'/settings/admin/management'} className='py-2 px-4 bg-[#FF0000] cursor-pointer text-white rounded-md'>
          Admin Management
        </Link>
      </Vertical>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-full h-[80vh] p-6 bg-white space-y-6">
            <div className='max-w-md'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video Call Cost
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Set cost per minute for video call
              </p>
              <Field
                type="text"
                name="videoCallCost"
                placeholder="Enter cost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="videoCallCost"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            <div className='max-w-md'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Live Cost
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Set cost per minute for live
              </p>
              <Field
                type="text"
                name="liveCost"
                placeholder="Enter cost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="liveCost"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            <div className='max-w-md'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                VIP Plan cost
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Set the cost for premium vip plan
              </p>
              <Field
                type="text"
                name="vipPlanCost"
                placeholder="Enter cost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="vipPlanCost"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="max-w-md w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Setting;