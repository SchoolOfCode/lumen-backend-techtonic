const { query } = require("../db/index.js");

async function getResourcesAndNotes() {
  //query database and return all resource columns as well as notes in notes table
  const result = await query(
    "SELECT * FROM resources r INNER JOIN submission_notes n ON r.id = n.resource_id"
  );
  const resourcesAndNotes = result.rows;
  return resourcesAndNotes;
}

async function addResource(resource) {
  await query(
    "INSERT INTO resources (title, url, language, category_id) VALUES ($1, $2, $3, $4)",
    [resource.title, resource.url, resource.language, resource.category_id]
  );
  return resource;
}

async function addNote(note) {
  //can only create note after resource has been created
  await query(
    "INSERT INTO submission_notes (submission_notes, resource_id) VALUES ($1, $2)",
    [note.text, note.resource_id]
  );
  return note;
}

module.exports = {
  getResourcesAndNotes,
  addNote,
  addResource,
};
