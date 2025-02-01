import React from 'react';
import { FaBrain, FaUserAlt, FaChartLine, FaUsers } from 'react-icons/fa';  // Importing React Icons
import './features.css';

function Features() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 lg:px-8 features">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Feature 1: Discover Your Traits */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <FaBrain className="text-blue-600 text-3xl" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Discover Your Traits</h3>
            <p className="mt-4 text-sm text-gray-600">
              Gain a deep understanding of your core personality traits in Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.
            </p>
          </div>

          {/* Feature 2: Self-Awareness */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FaUserAlt className="text-green-600 text-3xl" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Boost Your Self-Awareness</h3>
            <p className="mt-4 text-sm text-gray-600">
              The test provides insights into how you perceive and react to the world, enhancing your self-awareness.
            </p>
          </div>

          {/* Feature 3: Personal Growth */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
              <FaChartLine className="text-yellow-600 text-3xl" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Personal Growth Insights</h3>
            <p className="mt-4 text-sm text-gray-600">
              Understand your strengths and areas of improvement to work on your personal and professional development.
            </p>
          </div>

          {/* Feature 4: Understand Your Relationships */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <FaUsers className="text-orange-600 text-3xl" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Improve Your Relationships</h3>
            <p className="mt-4 text-sm text-gray-600">
              Learn how your personality affects your interactions with others and build stronger relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
