const Workout = require("../models/Workout");
const Comment = require("../models/Comment");

module.exports = {
  
  getWorkouts: async (req, res) => {
    try {
      const workouts = await Workout.find({user: req.user.id});
      res.send({workouts: workouts});

    } catch (err) {
      console.log(err);
    }
  },
  getWorkout: async (req, res) => {
    try {
      const workout = await Workout.find({name: req.params.name, user: req.user.id});
      res.send({workout: workout});

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

          console.log("Drill array: " + drill)
          arr.push(drill)
        }) 

        console.log("Workout array: " + arr)
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

      Workout.create({
        name: req.body.name,
        likes: 0,
        user: req.user.id,
        drills: arr
      });
    

      console.log("Workout has been added!");
      res.redirect(req.session.returnTo || "/home");
    } catch (err) {
      console.log(err);
    }
  }
  ,
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

      res.redirect(req.session.returnTo || "/workouts");
      
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
      res.redirect(req.session.returnTo || "/home");
    } catch (err) {
      res.redirect(req.session.returnTo || "/home");
    }
  }
};
