exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          class_name: "Zumba",
          class_type: "Cardio",
          class_duration: "60",
          class_intensity: "Intermediate",
          class_location: "New York",
          class_max: "10",
        },
      ]);
    });
};
