
exports.seed = function(knex) {
  // Deletes ALL existing entries
	return knex("tasks")
  .del()
  .then(function() {
    // Inserts seed entries
    return knex("tasks").insert([
      {
        id: 1,
        description: "Get building permit",
        notes: "First step",
        completed: 0,
        project_id: 1
      },
      {
        id: 2,
        description: "Draw a floorplan",
        completed: 0,
        project_id: 1
      }
    ]);
  });
};
