function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 400 && feet < 2000) {
    result = "That will be twenty bucks.";
  } else if (feet >= 2000 && feet < 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (feet >= 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city){
  let response
  city === "NYC" ? response = "Ok, sounds good." : response = "No go.";

  return response
}

function switchOnCharmFromTip(tip){
  let message;

  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
  }
  return message
}