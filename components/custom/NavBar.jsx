"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NavBar() {
  return (
    <div className="absolute top-0 right-0">
      {/* TODO session change fix */}
      {true ? (
        <Avatar>
          <AvatarImage src="/avatar.png" alt="avatar" />
          <AvatarFallback alt="avatar">AV</AvatarFallback>
        </Avatar>
      ) : (
        <Button>log In</Button>
      )}
    </div>
  );
}
