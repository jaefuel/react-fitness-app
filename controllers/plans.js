const Plan = require("../models/Plan");
const Workout = require("../models/Workout");
const Comment = require("../models/Comment");

module.exports = {
  getPlans: async (req, res) => {
    try {
      const plans = await Plan.find({user: req.params.id});
      res.send({plans: plans});
    } catch (err) {
      console.log(err);
    }
  },
  explorePlans: async (req, res) => {
    try {
      const plans = await Plan.find({});
      res.send({plans: plans});
    } catch (err) {
      console.log(err);
    }
  },
  addPlan: async (req, res) => {
    try {        

      const plan = await Plan.findById(req.params.id)

      Plan.create({
        name: plan.name,
        description: plan.description,
        likes: 0,
        user: req.user.id,
        workouts: plan.workouts
      }); 

      console.log("Plan has been added!");
      res.redirect("http://localhost:3000/home");
    } catch (err) {
      console.log(err);
    }
  },
  publishPlan: async (req, res) => {

    async function findWorkout(workoutname)
    {
      
      const workout = await Workout.find({name: workoutname});
      const data = await workout
      return data[0]
    }

    try {        
  
      let arr = []

      await req.body.workouts.forEach(async (e) => {
          arr.push(await findWorkout(e))

          if (arr.length == req.body.workouts.length)
          {
            Plan.create({
              name: req.body.name,
              description: req.body.plandescription,
              likes: 0,
              user: req.user.id,
              workouts: arr
            }); 
          }
        })

      console.log("Plan has been added!");
      res.redirect("http://localhost:3000/home");
    } catch (err) {
      console.log(err);
    }
  },
  likePlan: async (req, res) => {
    try {
      const plan = await Plan.findById(req.params.id)

      if (!plan.likes.includes(req.user.id))
      {
        await Plan.findOneAndUpdate(
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

      res.redirect("http://localhost:3000/plans");
      
    } catch (err) {
      console.log(err);
    }
  },
  deletePlan: async (req, res) => {
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
