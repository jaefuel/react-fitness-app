const Plan = require("../models/Plan");
const Workout = require("../models/Workout");
const Comment = require("../models/Comment");
const { faPlaneCircleCheck } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
  getPlans: async (req, res) => {
    try {
      const plans = await Plan.find({user: req.user.id});
      res.send({plans: plans});
    } catch (err) {
      console.log(err);
    }
  },
  discoverPlans: async (req, res) => {
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
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
  publishPlan: async (req, res) => {
    async function findWorkout(workoutName)
    {
      
      const workout = await Workout.find({name: workoutName, user: req.user.id});
      return workout[0]
    }

    async function findPlan(planName)
    { 
      const plan = await Plan.find({name: planName, user: req.user.id});
      console.log("PLAN")
      console.log(plan)
      return plan
    }
    

    try {        

      let plan = await findPlan(req.body.name);


      let arr = [];
      let diff = 0;

      if (typeof plan[0] != "object")
      {
        if (typeof req.body.workouts == "object")
        {     
        await req.body.workouts.forEach(async (e) => {
          if (e != "")
          {
            arr.push(await findWorkout(e))
  
            if (arr.length == req.body.workouts.length-diff)
            {
            Plan.create({
              name: req.body.name,
              description: req.body.plandescription,
              likes: 0,
              user: req.user.id,
              workouts: arr
            }); 
            console.log("Plan has been added!");
            }
          }
          else
          {
            diff++;
          }
          
        })
        }
        else
        {
          if (req.body.workouts != "")
          {
          arr.push(await findWorkout(req.body.workouts))
  
          Plan.create({
            name: req.body.name,
            description: req.body.plandescription,
            likes: 0,
            user: req.user.id,
            workouts: arr
          }); 
          console.log("Plan has been added!");
          }
   
        }  
      }
      else
      {
        console.log("Plan already exists!");
      }
      


      
      res.redirect("/home");
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

      res.redirect("/plans");
      
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
