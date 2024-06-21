import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { BellDot } from 'lucide-react';
import NotificationContent from './notification-content';

type Props = {}

const Notification = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BellDot className="h-7 w-7 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notification</DialogTitle>
          <DialogDescription>
            Check all your notifications and stay updated always
          </DialogDescription>
        </DialogHeader>
        <NotificationContent />
      </DialogContent>
    </Dialog>
  );
}

export default Notification