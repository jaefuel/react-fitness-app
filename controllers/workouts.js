const Workout = require("../models/Workout");
const Comment = require("../models/Comment");

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find({user: req.params.id});
      res.send({workouts: workouts});

    } catch (err) {
      console.log(err);
    }
  },
  exploreWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find({});
      res.send({workouts: workouts});

    } catch (err) {
      console.log(err);
    }
  },
  publishWorkout: async (req, res) => {
    try {
      let arr = []

      console.log(req.body)

      
      if (Array.isArray(req.body.drillname))
      {
        req.body.drillname.forEach((e,i) => {
          let drill
          if (req.body[i +",reps"])
          {
            drill = [req.body.drillname[i], req.body.drilldescription[i], req.body.sets[i], req.body[i +",reps"], "rep(s)"]

          }
          else if(req.body[i +",secs"])
          {
            drill = [req.body.drillname[i], req.body.drilldescription[i], req.body.sets[i], req.body[i +",secs"], "sec(s)"]

          }
          arr.push(drill)
        }) 
      }
      else
      {
        let drill
        
        if (req.body["0,reps"])
        {
          drill = [req.body.drillname, req.body.drilldescription, req.body.sets, req.body["0,reps"], "rep(s)"]
        }
        else if (req.body["0,secs"])
        {
          drill = [req.body.drillname, req.body.drilldescription, req.body.sets, req.body["0,secs"], "sec(s)"]
        }
        
        arr.push(drill)
      }

      await Workout.create({
        name: req.body.name,
        likes: 0,
        user: req.user.id,
        drills: arr
      });
    

      console.log("Workout has been added!");
      res.redirect("http://localhost:3000/home");
    } catch (err) {
      console.log(err);
    }
  },
  offDay: async (req, res) => {
    try {
      Workout.create({
        name: "Off Day",
      });

    } catch (err) {
      console.log(err);
    }
  },
  likeWorkout: async (req, res) => {
    try {
      const workout = await Workout.findById(req.params.id)

      if (!workout.likes.includes(req.user.id))
      {
        await Workout.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { likes: req.user.id },
          }
        );

        console.log("Likes +1");
      }
      else
      {
        console.log("You already liked this workout");
      }

      res.redirect("http://localhost:3000/workouts");
      
    } catch (err) {
      console.log(err);
    }
  },
  deleteWorkout: async (req, res) => {
    try {
      // Find post by id
      let workout = await Workout.findById({ _id: req.params.id });
      // Delete post from db
      await Workout.remove({ _id: req.params.id });
      console.log("Deleted Workout");
      res.redirect("/home");
    } catch (err) {
      res.redirect("/home");
    }
  }
};
