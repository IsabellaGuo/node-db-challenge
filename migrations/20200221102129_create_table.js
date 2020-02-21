
exports.up = function(knex) {
	return knex.schema
	//-------projects table--------
		.createTable("projects", tbl => {
			tbl.increments().notNullable(); // primary key

			tbl.text("name")
				.notNullable()
				.unique();
			tbl.string("description");
			tbl.boolean("completed")
				.notNullable()
				.defaultTo(false);
		})
    //--------resources table----------
		.createTable("resources", tbl => {
			tbl.increments().notNullable(); // primary key

			tbl.text("name")
				.notNullable()
				.unique();
			tbl.string("description");
		})
	//-------project resource table----------
		.createTable("projects_resources", tbl => {
			

			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			tbl.integer("resource_id")
				.notNullable()
				.references("id")
				.inTable("resources")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			tbl.primary(["project_id", "resource_id"]);
		})
	//-----------tasks table---------------
		.createTable("tasks", tbl => {
			tbl.increments().notNullable(); // primary key

			tbl.string("description").notNullable();
			tbl.string("notes");
			tbl.boolean("completed")
				.notNullable()
				.defaultTo(false);
			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
  
};

exports.down = function(knex) {
    return knex.schema
		.dropTableIfExists("projects_resources")
		.dropTableIfExists("projects")
		.dropTableIfExists("resources")
		.dropTableIfExists("tasks");
};
