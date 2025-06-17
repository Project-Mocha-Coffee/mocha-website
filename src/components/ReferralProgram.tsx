import React from 'react';
import { Gift, Share2, Users, ArrowRight } from 'lucide-react';

const ReferralProgram: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-brown-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-white mb-2 font-bold">
              Referral Program
            </h2>
            <p className="text-brown-200 max-w-2xl mx-auto">
              Share the opportunity and earn rewards. Help others discover sustainable coffee investing while growing your own portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">Earn Free Trees</h3>
                  <p className="text-brown-600 text-sm">Refer a friend and get rewarded</p>
                </div>
              </div>
              <div className="bg-brown-50 p-4 rounded-lg mb-4">
                <p className="text-brown-800 font-semibold text-lg mb-2">
                  Earn 1 free tree for every $500 invested
                </p>
                <p className="text-brown-600 text-sm">
                  When your referral makes their first investment, you'll receive free coffee trees based on their investment amount.
                </p>
              </div>
              <ul className="space-y-2 text-brown-700 text-sm mb-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brown-400 rounded-full mr-2"></div>
                  No limit on referrals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brown-400 rounded-full mr-2"></div>
                  Trees added to your portfolio
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brown-400 rounded-full mr-2"></div>
                  Same management and returns
                </li>
              </ul>
            </div>

            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Share2 className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">Easy Sharing</h3>
                  <p className="text-brown-600 text-sm">Share with just a few clicks</p>
                </div>
              </div>
              <p className="text-brown-700 text-sm mb-4">
                Use our easy social sharing options to spread the word about sustainable coffee investing.
              </p>
              <div className="space-y-3">
                <button className="w-full btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share on Social Media
                </button>
                <button className="w-full btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center">
                  <Users className="mr-2 h-4 w-4" />
                  Send Personal Invite
                </button>
                <button className="w-full btn btn-secondary">
                  Copy Referral Link
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn btn-gold">
              Start Referring Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram; 