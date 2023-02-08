module.exports = async function (helper) {
  const input = helper.getNormalizedInput("passcode");
  console.log(`You entered: ${input}`);

  if (!input) {
    return helper.fail(`Please enter a number that `);
  } else if (input === "6") {
    return helper.success(
      `You enter the correct answer needed to bypass the lasers. Soon after, the lasers
      retract and clear your path forward.`
    );
  } else
    return helper.fail(
      "That answer is incorrect. Maybe you should try using string.split to turn it into arrays and then filter "
    );
};
