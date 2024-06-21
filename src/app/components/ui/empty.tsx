import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <main className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image src="/vector.png" alt="" fill />
      </div>
      <p className="text-muted-foreground">{label}</p>
    </main>
  );
};

export default Empty;
