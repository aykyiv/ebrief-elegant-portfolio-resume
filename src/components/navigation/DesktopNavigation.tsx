import React from "react";
import { Button } from "../ui/button";

function DesktopNavigation() {
  return (
    <div className="hidden xl:flex flex-row justify-evenly">
      {["About", "Resume", "Portfolio", "Articles",  "Contact"].map((item) => (
        <Button variant="outline" key={item}>
          {item}
        </Button>
      ))}
    </div>
  );
}

export default DesktopNavigation;
