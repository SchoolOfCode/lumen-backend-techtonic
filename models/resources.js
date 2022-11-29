import { query } from "../db/index.js";

// Exporting both async functions 
// This function is making a GET request.

export async function getResources() {
  const result = await query(
    "SELECT DISTINCT r.*, c.category FROM main_resources r INNER JOIN category c ON c.id = r.category_id ORDER BY date DESC"
  );
  const resources = result.rows;
  return resources;
}

// This function is making a POST request.
export async function addResource(resource) {
  await query(
    "INSERT INTO main_resources (title, url, language, category_id, submission_notes) VALUES ($1, $2, $3, $4, $5)",
    [
      resource.title,
      resource.url,
      resource.language,
      resource.category_id,
      resource.submission_notes,
    ]
  );
  return resource;
}

