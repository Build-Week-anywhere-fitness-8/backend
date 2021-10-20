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
        {
          class_name: "Soul Cycle",
          class_type: "Cardio",
          class_duration: "120",
          class_intensity: "Advanced",
          class_location: "Miami",
          class_max: "10",
        },
        {
          class_name: "Boxing",
          class_type: "Cardio",
          class_duration: "60",
          class_intensity: "Intermediate",
          class_location: "Grand Rapids",
          class_max: "20",
        },
        {
          class_name: "Hot Yoga",
          class_type: "Yoga",
          class_duration: "60",
          class_intensity: "Beginner",
          class_location: "Chicago",
          class_max: "10",
        },
        {
          class_name: "Cross-fit",
          class_type: "Strength",
          class_duration: "60",
          class_intensity: "Advanced",
          class_location: "Los Angeles",
          class_max: "10",
        },
      ]);
    });
};
