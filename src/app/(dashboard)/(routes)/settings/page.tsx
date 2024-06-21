import { UserButton, UserProfile } from '@clerk/nextjs';
import { Settings } from 'lucide-react';
import React from 'react'
import Heading from '~/app/components/heading';
import SubscriptionButton from '~/app/components/subscription-button';

type Props = {}

const SettingsPage = (props: Props) => {
  return (
    <main>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className='-mt-8 md:mt-0 md:w-96'>
        <UserProfile />
      </div>
    </main>
  );
}

export default SettingsPage