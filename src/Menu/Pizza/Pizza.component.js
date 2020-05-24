import React from "react";
import { Button } from "../../Shared/Button.component";

export const Pizza = ({ name, price, desc }) => {
  return (
    <div className="pizza-card flex py-6">
      <div className="rounded-full flex-initial bg-orange-300 w-32 h-32 mx-6 "></div>
      <div className="items-center flex flex-1">
        <div>
          <p className="text-xl font-light italic">Muzzarella</p>
          <p className="text-2xl font-light">$8</p>
          <p className="text-sm font-light italic">
            Your favorite cheese pizza made with classic marinara sauce topped
            with mozzarella cheese. Order pizza online now.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-grow"></div>
        <div className="flex">
          <div className="cursor-pointer">
            <Button green>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
