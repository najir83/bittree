'use client';

import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Simple & Transparent Pricing</h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-10">
        Bittree is completely free to use — no registration required. Just create your profile and start sharing your links instantly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Free Plan */}
        <div className="border border-gray-200 rounded-2xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Free Forever</h2>
          <p className="text-gray-600 mb-4">No login. No paywalls. Just your links.</p>
          <div className="text-4xl font-bold mb-4">₹0</div>
          <ul className="text-left mb-6 space-y-2 text-sm">
            <li>✅ Unlimited Links</li>
            <li>✅ Custom Page Handle</li>
            <li>✅ Profile Picture & name</li>
            <li>✅ Mobile-Friendly UI</li>
            <li>✅ Instant Sharing</li>
          </ul>
          <Link href="/generate">
            <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition">
              Claim Your Linktree
            </button>
          </Link>
        </div>

        {/* Optional Pro Plan - Hidden or Future Use */}
        {/* <div className="border border-gray-200 rounded-2xl shadow p-6 text-center opacity-50 pointer-events-none">
          <h2 className="text-2xl font-semibold mb-2">Pro (Coming Soon)</h2>
          <p className="text-gray-600 mb-4">More power & customization.</p>
          <div className="text-4xl font-bold mb-4">₹99/mo</div>
          <ul className="text-left mb-6 space-y-2 text-sm">
            <li>✨ Advanced Analytics</li>
            <li>✨ Custom Domain</li>
            <li>✨ Themes & Branding</li>
            <li>✨ Scheduling Links</li>
          </ul>
          <button className="bg-gray-300 text-gray-600 px-6 py-2 rounded-full font-medium cursor-not-allowed">
            Coming Soon
          </button>
        </div> */}
      </div>

      <p className="mt-12 text-center text-sm text-gray-500">
        No credit card. No sign-up.
      </p>
    </main>
  );
};

export default page;
