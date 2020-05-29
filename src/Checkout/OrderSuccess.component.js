import React from "react";
import { useLocation } from "react-router-dom";
import { Page } from "../Shared/Page.component";

export const OrderSuccess = () => {
  const location = useLocation();

  return (
    <Page>
      <div className="inset-0 relative flex items-center justify-center">
        <div className="p-6 shadow-xs">
          {location.search
            ? `We will send you our Pizza! ticket number: ${location.search.ticket}!`
            : "ticket number invalid"}
        </div>
      </div>
    </Page>
  );
};
