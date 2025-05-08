import { z } from 'zod';

export const BookingSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  country: z.string().min(1, 'Country is required'),
  duration: z.string().min(1, 'Duration is required'),
  package: z.string().min(1, 'Package is required'),
  bookingType: z.enum(['binding', 'non-binding']),
});

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});