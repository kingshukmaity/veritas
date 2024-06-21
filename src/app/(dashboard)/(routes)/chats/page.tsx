import { MessageSquare, MessagesSquare } from 'lucide-react';
import React from 'react'
import Heading from '~/app/components/heading';

type Props = {}

const ChatsPage = (props: Props) => {
  return (
    <main>
      <Heading
        title="Chats"
        description="Check all chat history"
        icon={MessagesSquare}
        iconColor="text-pink-500"
        bgColor="bg-pink-500/10"
      />
      <section className="h-full w-full items-center justify-center text-center">
        <span>No Chat History</span>
      </section>
    </main>
  );
}

export default ChatsPage