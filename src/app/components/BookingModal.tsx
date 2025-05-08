'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BookingSchema } from '@/app/lib/validation';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';


type BookingFormData = z.infer<typeof BookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useTranslation();
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      bookingType: 'binding',
      date: '',
      country: '',
      duration: '',
      package: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // In a real implementation, you would send this data to your API
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success message and close modal
      alert('Booking submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;
  
  // Close modal when clicking backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-0 max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold font-heading text-center">
            {t('sections.booking.title', 'Book Your Bachelorette Experience')}
          </h2>
          <p className="text-lg text-white/90 mt-2 text-center">
            {t('sections.booking.subtitle', 'Fill out the form below and get ready for an unforgettable celebration')}
          </p>
          
          <button 
            className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Form content with subtle background */}
        <div className="p-8 bg-gradient-to-b from-gray-50 to-white overflow-y-auto max-h-[60vh]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  label={t('form.date', 'Preferred Date')}
                  type="date"
                  error={errors.date?.message}
                  className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  {...register('date')}
                />
              </div>
              
              <div>
                <Input
                  label={t('form.country', 'Your Country')}
                  error={errors.country?.message}
                  className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  {...register('country')}
                  placeholder={t('form.country_placeholder', 'Where are you traveling from?')}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Controller
                  name="duration"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={t('form.duration', 'Trip Duration')}
                      error={errors.duration?.message}
                      className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                      {...field}
                    >
                      <option value="">{t('form.select_duration', '-- Select Duration --')}</option>
                      <option value="3">3 {t('form.days', 'Days')}</option>
                      <option value="4">4 {t('form.days', 'Days')}</option>
                      <option value="5">5 {t('form.days', 'Days')}</option>
                      <option value="custom">{t('form.custom', 'Custom (specify in notes)')}</option>
                    </Select>
                  )}
                />
              </div>
              
              <div>
                <Controller
                  name="package"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={t('form.package', 'Experience Package')}
                      error={errors.package?.message}
                      className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                      {...field}
                    >
                      <option value="">{t('form.select_package', '-- Select Package --')}</option>
                      <option value="luxury">{t('packages.luxury.title', 'Luxury Escape')}</option>
                      <option value="adventure">{t('packages.adventure.title', 'Adventure & Fun')}</option>
                      <option value="budget">{t('packages.budget.title', 'Budget Friendly')}</option>
                      <option value="custom">{t('packages.custom.title', 'Custom Experience')}</option>
                    </Select>
                  )}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-lg">
                {t('form.booking_type', 'Booking Type')}
              </label>
              <div className="flex space-x-6 bg-white p-4 rounded-lg border border-purple-500 shadow-sm">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="binding"
                    className="mr-2 h-5 w-5 text-purple-600 focus:ring-purple-500"
                    {...register('bookingType')}
                  />
                  <span className="text-gray-700 font-medium">{t('form.binding', 'Binding Reservation')}</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="non-binding"
                    className="mr-2 h-5 w-5 text-purple-600 focus:ring-purple-500"
                    {...register('bookingType')}
                  />
                  <span className="text-gray-700 font-medium">{t('form.non_binding', 'Non-binding Inquiry')}</span>
                </label>
              </div>
              {errors.bookingType?.message && (
                <p className="mt-1 text-sm text-red-600">{errors.bookingType.message}</p>
              )}
            </div>
          </form>
        </div>

        {/* Footer with action buttons */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end space-x-4">
          <Button
            type="button"
            color="secondary"
            className="px-6 py-2"
            onClick={onClose}
          >
            {t('buttons.cancel', 'Cancel')}
          </Button>
          <Button
            type="submit"
            color="primary"
            className="px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('buttons.submitting', 'Processing...')}
              </span>
            ) : (
              t('buttons.submit', 'Book Now')
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}