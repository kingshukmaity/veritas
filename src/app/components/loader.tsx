import Image from "next/image";
import React from "react";
import { Loader } from 'lucide-react';

const LoaderComponent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-32 w-32">
        <Loader />
      </div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};

export default LoaderComponent;
