import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const SwaggerDocs = () => {
    return (
      <div style={{ backgroundColor: "wheat" }}>
        <SwaggerUI url="/tmdb-api.json" />
      </div>
    );
};