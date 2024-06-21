import React from 'react'
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

type Props = {}

const SubscriptionButton = (props: Props) => {
  return (
    <Button
      variant="premium"
    >
      Upgrade Now
      <Zap className="ml-2 h-4 w-4 fill-white" />
    </Button>
  );
}

export default SubscriptionButton