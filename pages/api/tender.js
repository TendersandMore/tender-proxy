export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const params = new URLSearchParams(req.query).toString();
    const url = `https://www.find-tender.service.gov.uk/api/1.0/ocdsReleasePackages?${params}`;

    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
