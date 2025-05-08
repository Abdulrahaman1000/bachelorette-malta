import { BookingSchema } from '@/app/lib/validation';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate the request data
    const parsedData = BookingSchema.parse(body);
    
    // Here you would typically:
    // 1. Save to a database
    // 2. Send notification emails
    // 3. Process payments if applicable

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Booking received successfully', booking: parsedData },
      { status: 201 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }

    // Handle all other errors
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
