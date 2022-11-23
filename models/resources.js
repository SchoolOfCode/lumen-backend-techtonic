const { query } = require("../db/index.js");

async function getResources() {
  //query database and return all resource columns as well as notes in notes table
  const result = await query(
    "SELECT DISTINCT * FROM main_resources r INNER JOIN category c ON c.id = r.category_id"
  );
  const resources = result.rows;
  return resources;
}

async function addResource(resource) {
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

module.exports = {
  getResources,
  addResource,
};
