import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Page } from "../Shared/Page.component";

export const OrderSuccess = () => {
  const location = useLocation();
  const history = useHistory();

  if (location.state) {
    return (
      <Page>
        <div className="inset-0 relative flex items-center justify-center">
          <div className="p-6 shadow-xs" id="order-success-message">
            {location.search
              ? `We will send you our Pizza! ticket number: ${location.state.ticket}!`
              : "ticket number invalid"}
          </div>
        </div>
      </Page>
    );
  } else {
    history.push("/");
    return "";
  }
};
