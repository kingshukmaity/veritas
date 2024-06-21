import React from 'react'
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

type Props = {}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const notification = []

const NotificationContent = (props: Props) => {
    return (
      <div className="grid h-96 items-center justify-center gap-4 py-4 text-center">
        {notification.length <= 0 ? (
            <span className="text-lg">No notifications available</span>
                
        ) : (
            <ScrollArea className="h-full w-96 rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Notifications</h4>
                    {tags.map((tag) => (
                    <>
                        <div key={tag} className="text-sm">
                        {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                    ))}
                </div>
            </ScrollArea>
        )}
      </div>
    );
}

export default NotificationContent