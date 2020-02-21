
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{ id: 1, name: "Build a suite", completed: 0 },
				{ id: 2, name: "Renovate kitchen", completed: 0 },
				{
					id: 3,
					name: "Build a walk-in closet",
					description: "follow the floorplan",
					completed: 1
				}
			]);
		});
};
