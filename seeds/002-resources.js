
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("resources").insert([
				{ id: 1, name: "construction tools" },
				{ id: 2, name: "construction materials" }
			]);
		});
};
