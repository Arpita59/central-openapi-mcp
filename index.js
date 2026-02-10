import openapiData from "./openapi.json";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve the JSON file at /openapi.json
    if (url.pathname === "/openapi.json") {
      return new Response(JSON.stringify(openapiData, null, 2), {
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    // Redirect root to /openapi.json
    if (url.pathname === "/") {
      return Response.redirect(url.origin + "/openapi.json", 302);
    }

    // 404 for any other path
    return new Response("Not Found", { status: 404 });
  },
};
