"use client";

import Image from "next/image";
import Link from "next/link";
import { StarRating } from "./star-rating";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { App } from "@/data/apps";

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/app/${app.id}`}>
      <Card className="bg-[#282d32] border-none overflow-hidden flex flex-col items-center p-4 hover:scale-[1.03] transition-transform duration-200 h-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-between w-full">
            {app.updated && (
              <div className="updated-badge mb-2">UPDATED</div>
            )}
            {app.category && (
              <Badge variant="outline" className="text-xs bg-[#1e2227] border-none text-gray-400">
                {app.category}
              </Badge>
            )}
          </div>

          <div className="relative w-16 h-16 mb-2 rounded-lg overflow-hidden">
            <Image
              src={app.imageUrl}
              alt={`${app.name} Logo`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          <h3 className="text-sm font-semibold text-white text-center mb-1">
            {app.name}
          </h3>

          <StarRating rating={app.rating} />

          {app.downloads && (
            <div className="text-xs text-gray-400 mt-1">
              {app.downloads} downloads
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
