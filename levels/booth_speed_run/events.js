module.exports = function (event, world) {
  console.log(`VR Template: ${event.name}`);
  let electron = require("electron");
  const levelFolder = `${electron.remote.app.getPath(
    "userData"
  )}/QuestIDE/${world.getCurrentLevelName()}`;
  const sampleCodeFolder = `${
    world.getContext().extensions.directory
  }/twilioQuestBoothExecution/levels/booth_speed_run/objectives`;
  const fs = require("fs");

  if (
    event.name === "triggerAreaWasEntered" &&
    event.target.name.includes("Complete")
  ) {
    console.log(event);
    console.log("Wiping Memory");

    world.removeObjective("booth_speed_run", "tutorial");
    world.removeObjective("booth_speed_run", "finish");
    world.removeObjective("booth_speed_run", "count_characters");
    world.removeObjective("booth_speed_run", "reverse_string");
    world.removeObjective("booth_speed_run", "string_length");
    world.removeObjective("booth_speed_run", "swag_chest");

    //RESET USER CODE
    fs.readdir(levelFolder, (err, files) => {
      files.forEach((missionFolder) => {
        fs.readdir(`${levelFolder}/${missionFolder}`, (err, files) => {
          console.log(`Rewriting ${missionFolder}`);
          const dest = `${levelFolder}/${missionFolder}/user_code.js`;
          const src = `${sampleCodeFolder}/${missionFolder}/example.js`;
          fs.copyFile(
            src,
            dest,
            fs.constants.COPYFILE_FICLONE,
            (error) => console.error
          );
        });
      });
    });

    world.warp("booth_speed_run", "player_entry1", "default");

    console.log(world);
  }
};
