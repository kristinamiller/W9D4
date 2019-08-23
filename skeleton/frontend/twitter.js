const FollowToggle = require("./follow_toggle.js");

$(() => {
  $(".follow-toggle").each((_index, btn) => new FollowToggle(btn));

});