export default async function handler(req, res) {
  const params = new URLSearchParams(req.query).toString();
  const url = `https://www.find-tender.service.gov.uk/api/1.0/ocdsReleasePackages?${params}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).json(data);
}
