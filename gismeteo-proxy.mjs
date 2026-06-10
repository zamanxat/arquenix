import http from "http";

const PORT = 8787;
const TARGET = "http://45e30b7f.services.gismeteo.ru/inform-service/a407a91cfcb53e52063b77e9e777f5bd";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const requestUrl = new URL(req.url || "/", `http://127.0.0.1:${PORT}`);
  if (!requestUrl.pathname.startsWith("/forecast")) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("RainGrid Gismeteo proxy: /forecast?lang=ru&city=5205");
    return;
  }

  try {
    const upstream = `${TARGET}${requestUrl.pathname}${requestUrl.search}`;
    const response = await fetch(upstream, {
      headers: { "User-Agent": "Gismeteo Android v2, RainGrid/1.0" }
    });
    const body = await response.text();
    res.writeHead(response.status, { "Content-Type": "application/xml; charset=utf-8" });
    res.end(body);
  } catch {
    res.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Gismeteo proxy error");
  }
});

async function proxyAlreadyRunning() {
  try {
    const response = await fetch(`http://127.0.0.1:${PORT}/forecast?lang=ru&city=5205`);
    const body = await response.text();
    return response.ok && body.includes("<weather>");
  } catch {
    return false;
  }
}

server.on("error", async (error) => {
  if (error.code !== "EADDRINUSE") {
    console.error(error);
    process.exit(1);
  }
  if (await proxyAlreadyRunning()) {
    console.log(`Gismeteo proxy әлдеқашан жұмыс істейді: http://127.0.0.1:${PORT}`);
    process.exit(0);
  }
  console.error(`8787 порты бос емес. Босату: lsof -ti :8787 | xargs kill`);
  process.exit(1);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Gismeteo proxy іске қосылды: http://127.0.0.1:${PORT}/forecast?lang=ru&city=5205`);
});
