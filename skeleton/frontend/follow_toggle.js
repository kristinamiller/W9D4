const ApiUtil = require('./api_util.js');

function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.handleClick = this.handleClick.bind(this);
  this.render();
  this.handleClick();
  
}

FollowToggle.prototype.render = function() {
  if(this.followState === "followed") {
    this.$el.html('UnFollow!');
  } else {
    this.$el.html('Follow!');
  }
};

FollowToggle.prototype.handleClick = function() {
  // let that = this;
  this.$el.on("click", (event) => {
    // console.log("clickedddd");
    event.preventDefault();
    if (this.followState === "unfollowed") {
      // debugger
      ApiUtil.followUser(this.userId)
      .then((res) => {
        this.followState = "followed";
        this.render();
      });
    } else {
      // debugger
      ApiUtil.unfollowUser(this.userId)
      .then((res) => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  })
};
 
    // return $.ajax({
    //   url: `/users/${this.userId}/follow`,
    //   type: `${this.followState === "followed" ? "DELETE" : "POST"}`,
    //   success: function() {
    //     this.followState === "followed" ? this.followState = "unfollowed" : this.followState = "followed";
    //     this.render();
    //     },
    //   dataType: "JSON"
    // });
  // });
// };


module.exports = FollowToggle;