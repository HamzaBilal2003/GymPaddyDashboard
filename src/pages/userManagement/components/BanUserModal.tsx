import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../components/Modal';
import { ChevronDown } from 'lucide-react';

interface BanUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BanUserValuesWithId) => void;
  userId: string | number;
}

interface BanUserValues {
  unit: string;
  duration: string;
  reason: string;
}

interface BanUserValuesWithId extends BanUserValues {
  userId: string | number;
}

const durationUnits: BanUserValues['unit'][] = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'];

const validationSchema = Yup.object().shape({
  unit: Yup.string().required('Please select a time unit'),
  duration: Yup.number().typeError('Must be a number').positive().required('Duration is required'),
  reason: Yup.string().required('Reason is required'),
});

const BanUserModal: React.FC<BanUserModalProps> = ({ isOpen, onClose, onSubmit, userId }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ban User">
      <Formik
        initialValues={{
          unit: 'minutes',
          duration: '',
          reason: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit({ ...values, userId });
          onClose();
        }}
      >
        {({ errors, touched }) => (
          <Form className="p-6 space-y-5">

            {/* Time Unit Dropdown */}
            <div className="relative">
              <Field
                as="select"
                name="unit"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.unit && touched.unit ? 'border-red-500 text-red-500' : 'border-gray-200'
                } appearance-none focus:outline-none`}
              >
                {durationUnits.map((unit) => (
                  <option value={unit} key={unit}>{unit}</option>
                ))}
              </Field>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              {errors.unit && touched.unit && <p className="text-red-500 text-sm mt-1">{errors.unit}</p>}
            </div>

            {/* Duration */}
            <div>
              <Field
                name="duration"
                placeholder="Duration"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.duration && touched.duration ? 'border-red-500 text-red-500' : 'border-gray-200'
                } focus:outline-none`}
              />
              {errors.duration && touched.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
            </div>

            {/* Reason */}
            <div>
              <Field
                as="textarea"
                name="reason"
                placeholder="Reason"
                className={`w-full px-4 py-3 rounded-lg border max-h-[100px] ${
                  errors.reason && touched.reason ? 'border-red-500 text-red-500' : 'border-gray-200'
                } focus:outline-none`}
              />
              {errors.reason && touched.reason && (
                <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
              )}
            </div>

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

export default BanUserModal;
