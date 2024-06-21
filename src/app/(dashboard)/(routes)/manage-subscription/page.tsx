import { CreditCard, Settings } from 'lucide-react';
import React from 'react'
import Heading from '~/app/components/heading';
import SubscriptionButton from '~/app/components/subscription-button';

type Props = {}

const SubscriptionPage = (props: Props) => {
  return (
    <main>
      <Heading
        title="Manage Subscriptions"
        description="Manage account sunscription"
        icon={CreditCard}
        iconColor="text-green-500"
        bgColor="bg-green-500/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          You are cuurently on a free plan.
        </div>
        <SubscriptionButton />
      </div>
    </main>
  );
}

export default SubscriptionPage