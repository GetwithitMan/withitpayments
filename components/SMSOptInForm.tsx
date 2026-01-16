'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SMSOptInForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');

    // Format as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone number (should have 10 digits)
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!formData.consent) {
      setError('You must agree to receive text messages to sign up.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission - in production, this would send to your backend/Twilio
    try {
      // TODO: Replace with actual API call to your backend
      // The backend should:
      // 1. Store the consent record with timestamp
      // 2. Send confirmation SMS via Twilio asking user to reply YES
      // 3. Handle the YES response to complete double opt-in

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us at (970) 555-1234.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your Phone!</h3>
        <p className="text-gray-600 mb-4">
          We&apos;ve sent a confirmation text to <strong>{formData.phone}</strong>.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> To complete your sign-up, please reply <strong>YES</strong> to the text message you receive. You won&apos;t receive any updates until you confirm.
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Didn&apos;t receive a text? Check that your phone number is correct or{' '}
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ ...formData, phone: '' });
            }}
            className="text-[var(--primary)] hover:underline"
          >
            try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
          placeholder="(970) 555-1234"
          maxLength={14}
        />
        <p className="text-xs text-gray-500 mt-1">
          Enter your mobile number to receive text messages
        </p>
      </div>

      {/* Consent Checkbox */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
            required
          />
          <span className="text-sm text-gray-600">
            I agree to receive recurring automated marketing and informational text messages from With It Payments at the phone number provided. I understand that consent is not a condition of purchase. Message frequency varies (up to 10 msgs/month). Message and data rates may apply. Reply STOP to cancel, HELP for help. View our{' '}
            <Link href="/terms" className="text-[var(--primary)] hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[var(--primary)] hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Signing Up...
          </span>
        ) : (
          'Sign Up for Text Updates'
        )}
      </button>

      {/* Additional Info */}
      <p className="text-xs text-gray-500 text-center">
        After signing up, you&apos;ll receive a confirmation text. Reply YES to complete your subscription.
      </p>
    </form>
  );
}
