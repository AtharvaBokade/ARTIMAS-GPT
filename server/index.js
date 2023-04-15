const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const dotenv=require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");
const port = process.env.PORT || 6000


    const configuration = new Configuration({
      apiKey:"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",
    });
    const openai = new OpenAIApi(configuration);
  
  //   const history = [];
 

      // const user_input = readlineSync.question("Your input: ");
      let str="empty answer"
      const messages = [{role:"user",content:"Remember this information :Artimas : the must-attend technology and innovation event of the year Artimas is conducted on 17th and 18th April 2023 Head of event ARTIMAS is Atharva Joshi ! With six different challenges designed to showcase your talents, you'll have the chance to win exciting prizes and show off your skills in a competitive yet friendly environment. ARTIMAS hosted by PCCOE AiMSA. Prize pool for event is more than 35k. + Artimas Events : All 6 events in Artimas 1. EVENT NAME: Houdini Heist Team participation: Only teams of 3 people will be considered. General instructions:- 1 Event will include 3 rounds. 2 Each team will consist of 3 players. 3 Participants must bring a pen and paper for rough work for round 1 and 2. 4 From all the participating teams only 15 teams will progress to round 2. 5 Top 3 teams will progress to the final round. 6 The winning teams will be awarded cash prizes and other rewards. 7 Fairness in evaluation will be ensured strictly. 8 The event organizers reserve the right to disqualify any participant or team that violates the event rules or fails to follow instructions. ● Round wise details of the event. Round 1: Date: 18/04/2023 Mode: Offline Rules: 1 In this round participants’ knowledge, general awareness, aptitude, and logical reasoning abilities will be tested. 2 There will be 15 questions and each question will be of 1 mark. 3 The maximum duration allocated for the test shall be 20 minutes, beyond which participants shall not be permitted to continue answering the questions. 4 Submission time of answer sheet will be noted. 5 Teams will be assessed based on the number of questions answered correctly. 6 If 2 teams have the same score then their time taken for submitting the paper will be considered. TOP 15 TEAMS WILL PROCEED TO THE NEXT ROUND Round 2: Date: 18/04/2023 Mode: Offline Rules: 1 In this round there will be 10 questions. 2 First team to answer the question correctly gets a point and if multiple teams answer correctly at the same time then all of them will get a point. 3 This round will last for 20 minutes and the maximum time to answer a question is 2 minutes. 4 If there’s a tie between 2 or more teams there will be a tie-breaker round. 5 Rest of the instructions will be conveyed prior to the round. TOP 3 TEAMS WILL PROCEED TO THE FINAL ROUND Round 3: Date: 18/04/2023 Mode: Offline Duration: 1 hour Rules: 1 The final 3 teams will be playing the game in 3 different rooms. 2 First 2 teams to escape win. 3 The time duration is 1 hour 4 There should be no damage done to college property in the process. Strict action will be taken otherwise. 5 Rest of the instructions will be conveyed prior to the round. 2. EVENT NAME: HACK MATRIX • Round wise details of the Event Group Participation: Participate in a team of minimum 3 or maximum 4 members only. Round 1 Date: 15/04/23 Duration: 12 hrs Time: 9 am to 9 pm Mode: Online Submissions: Google Drive Link: will be communicated later TOP 8 GROUPS WILL BE SHORTLISTED FOR ROUND 2. • Design ARTIMAS as an AI ChatBot 1 Design a Function which would display the logo for Artimas as a Loading Screen. 25 points Example: ARTIMAS Evaluation Parameters Points Working 15 Creativity 10 Total 25 2 Design an algorithm which should be able to answer some basic questions about AiMSA and Artimas.75 points Total Difficulty levels for Questions Difficulty level 1 Difficulty level 2 *Evaluation will be done based on correctness of answer. Possible Questions may Include: Difficulty level 1: Points 5 10 What is Artimas? Describe AiMSA. Difficulty level 2: Events Hosted by AIMSA. More Sample Questions will be made available on the day of Event. Algorithms can be designed by using already available libraries to train a Language Model or teams can develop their own logic to categorise the questions and their responses which could be retrieved by using search algorithms. To obtain the data teams may refer to PCCoE AiMSA's social media handles. Instagram LinkedIn Facebook Twitter Note: Evaluation for Round 1 will only depend on the tasks Mentioned in Round 1 but the teams may continue their projects and utilise the extra time from Round 1 and start with the tasks from Round 2. Round 2 Date: 17/04/23 Mode: Offline Duration: 3hrs Time: 9 am to 12 pm. 1 Design a Module which could be capable of Automating different tasks. 100 points excluding the extras Difficulty levels for Tasks Difficulty level 1 Difficulty level 2 Points 15 20 *Exact Tasks of Round 2 will be disclosed on the day of Round 1 by 4 PM Teams may add new tasks for Automation other than the tasks mentioned which will award them with some extra points. limit of 25 extra points only . Possible Tasks May Include the following Automation built upon the Bot: Difficulty level 1 : - - Send an email to a specified email address. Difficulty level 2 : - Search a query on google and obtain the results. - Using Computer Vision for Image Detection/Recognition etc. More queries will be given on the day of event Round 2 Note: The Team with Maximum overall score from Round 1 and Round 2 will win. 3. EVENT NAME: ADRENALINE RUSH ● Round wise details of the event. Game : Valorant. Group Participation: Participate in a team of 5 members only. Round 1: Date: 16/04/23 Time: 9 am to 6 pm Event will start sharp at 9 am. TOP 4 TEAMS WILL BE SHORTLISTED FOR ROUND 2 Round 2: Date: 18/04/23 Time: 12 pm to 2 pm Venue: Admin Building 5205 LAB. Event will start sharp at 12 pm. Selected teams should report to the venue 30 mins prior. RULES: 1. Each team must include five members. 2. The tournament will be played in a knock-out format. 3. The tournament will use the standard competitive game settings. 4. There will be 2 rounds: Round 1 to be held on 16th March 23 Online mode , Round 2 Final/Semi-final to be held on 18th March 23 Venue: 5205LAB . 5. The map allocation will be done by the organizers. 6. Each match will have a designated observer to oversee the game. 7. Any use of cheats or exploits will result in disqualification. 8. Each player must have a valid valorant account and should use their official name throughout the tournament. 9. Players are expected to join the room created by the organizers 15 mins prior to the match, any delay by the team to start the match will result in a forfeit. 10. The team leader is responsible for inviting all team members to join the room. 11. Participants must bring their own devices to play in offline mode. Only LAN cable Internet Access and power supply will be provided. 12. Each team should play with the same squad which is registered. No changes will be considered in the team formation after the registration. 13. If a player is found playing in more than one team, the entire team will be disqualified. 14. In case of a disconnection, the match will be paused for maximum 5 mins and allowed to reconnect, if failed to do so the team will have to forfeit the match. 15. Any disputes or complaints must be reported to the tournament organizers immediately. 16. Players are expected to behave appropriately and respectfully towards other players. 17. Any violation of the rules will be dealt with accordingly. 18. Referees/Organizers decisions will be final and to be followed accordingly. 19. PCCOE students and non-PCCOE students are allowed to participate in the event. 20. Only Non-PCCOE student’s teams must pay an entry fee of Rs150. 21. If any single non- PCCOE student is present in a team that team also must pay Rs 150 as entry fee. NOTE: The tournament organizers reserve the right to modify the rules and format of the tournament at any time. The tournament organizers are not responsible for any technical difficulties or network issues that may affect the gameplay. 4. EVENT NAME: CYBERNETIC VISIONS • Round wise details of the event. Individual Participation: Only individual participation will be considered. Round 1: Online Preliminary Round Date: Should submit the poster till 16/04/2023 12 noon. Duration: 3 days Mode: Online Eligibility: • The competition is open only for PCCOE Students. Theme: • The theme for the preliminary round will be announced one week before the competition. The participants must create a poster that is relevant to the theme using Canva. Materials: • Participants must use Canva to create their posters. • They may use any templates, any of the tools and features provided by Canva to design their posters. The size of the poster must be 297 x 420 millimeters. Submission: • The participants must submit their posters in a digital format through google form. The theme will be announced by 13/04/2023 . Judging: 1 The posters will be judged based on the following criteria: 2 Creativity and originality 3 Relevance to the theme 4 Visual impact and message clarity Rules: 1 The participants which registered for the competition will only be considered for evaluation of the 1st round. 2 The participants not following the rules will be disqualified. 3 Participants should rename the file with their name and then submit. 4 The final poster should be submitted in png format only. TOP 25% STUDENTS WILL BE SHORTLISTED FOR ROUND 2 Round 2: Offline Final Round Date: 17/04/2023 Duration: 60 minutes Location: Academic Building Lab 6519 Mode: Offline Eligibility: • Only the participants who advance from the preliminary round are eligible to participate in the final round. Theme: • The theme for the final round will be announced at the beginning of the round. Materials: • Participants must use Canva to create their posters. They may use any of the tools and features provided by Canva to design their posters. The size of the poster must be 297 x 420 millimeters. Time Limit: • Participants will have 1 hour to complete their posters in a designated location provided by the competition organizers. Submission: • The participant must submit the final poster through google form or mail will be specified during the round . Rules: 1 The final poster should be submitted in png format only. 2 There will be some specifications given in the starting of the round like compulsory use of some specific elements in the poster or a color scheme. 3 No template should be used to make the poster. 4 Participants should carry their own laptops. 5 Organizing team will be monitoring the participants, whether they are cheating or not. 6 Organizing team may inspect your design halfway through the journey for a more accurate and fair evaluation. 7 Participants should rename the file with their name and then submit. 8 In case of cheating, contestants will be disqualified. Judging Criteria: Guidelines for evaluation: 1 Creativity and Originality: The poster should be unique and original, with a creative and innovative design that captures the viewer's attention. 2 Visual Impact: The design should be visually engaging and eye-catching, with good use of color, typography, and layout that is well-structured and easy to follow. 3 Message Clarity: The message of the poster should be clear and easy to understand, effectively communicating the intended message to the viewer. It should resonate with the intended audience. 4 Technical Skills: The poster should demonstrate a high level of technical proficiency, with well-executed illustrations, typography, and layout that are free of technical errors or inconsistencies. 5 Relevance to Theme: The poster should relate to the theme of the competition, showcasing the participant's ability to address the theme in an original and innovative way. The theme of the poster should be well-articulated and effectively communicated. 6 Overall Impression: The poster should be well-rounded and well-balanced across all categories, leaving a positive overall impression on the viewer. It should be effective in communicating its message to the intended audience. Each of these categories will be evaluated on a scale of 1-10, with a total possible score of 60 for all six categories combined. The participant with the highest total score would be declared the winner. 5. EVENT NAME: PIXEL PERFECT ● Round wise details of the event. Individual Participation: Only individual participation will be considered Date: 17/04/23 Time: 9 am to 9 pm RULES: 1. This event will be conducted in online mode. 2. The time for the competition will be from 9:00 AM to 9:00 PM. 3. Theme for the photography will be shared on the spot. 4. All photos should be clicked within the campus. 5. The photo clicked should be during the time of ARTIMAS Time-stamp required . 6. Only one submission is allowed per participant. 7. Submitted photos should be renamed with the participant’s name. 8. The photos will be collected through google forms till 9pm. After 9pm no one will be entertained. 9. Normal editing will be allowed but photoshopping is not allowed. 10. Photo should not contain any type of watermark 11. Participants should submit the original image along with the edited image if the image is edited . 12. No NSFW content allowed. 13. The participants should explain their idea behind the photo submitted 14. Winner will be selected based on creativity, composition, and uniqueness. 15. By submitting a photo, participants grant the organizers the right to use, reproduce, and publish the photo for promotional purposes. 16. Participants should ensure that their photos do not invade any individual's privacy or violate any laws or regulations. 17. The organizers reserve the right to disqualify any participant who fails to comply with the rules or provides false information. 6. EVENT NAME: NEURODRAIN ● Round wise details of the event. Individual Participation: Only individual participation will be considered ROUND 1: Logical Aptitude Test Date: 17/04/2023 Duration: 40 minutes Mode: Offline Rules: 1 For each correct answer, 4 marks will be given 2 For each wrong answer, 1 mark will be deducted 3 Mobile phones are not allowed Judging Criteria 1. Submission Time 2. Correct Answer TOP 15 STUDENTS WILL BE SHORTLISTED FOR ROUND 2 ROUND 2: Technical Quiz Date: 17/04/2023 Duration: 60 minutes Mode: Offline Rules: 1 Teams will be allotted by the Quizmaster on the spot. 2 Each team will be sharing one buzzer. 3 Teams will consist of 3 members each. 4 Misusing the buzzer will result in termination of the entire team. Judging Criteria: 1. Submission time 2. Correct Answer In case of any discrepancies, the decision of the Quizmaster will be final. + Artimas Team Contact Deatils : + HOUDINI HEIST PIYUSH AGARWAL 7972103836 PARTH SINGHAL COORDINATOR SHUBHAM SINGH 7020989258 + CYBERNETIC VISIONS OM BHAVSAR 9359560116 TUSHAR GARAD 9579121092 + NEURODRAIN GAUTAM BHAGAT 9970102190 SOHAM NARSALE O EVENT COORDINATOR SAYALI JADHAO 9511293443 + VALORANT AYUSH DONGARDIVE 7559268257 LOKESH KAD EVENT COORDINATOR KARTIK JAGTAP 9175078113 + PIXEL PERFECT HARSHAD GHOLVE 7796198948 ANURAG KARPE 8805318256 TUSHAR MAHAJAN 7666100610 + HACK MATRIX PRATHMESH KOLEKAR 8600713374 ATHARVA JOSHI EVENT COORDINATOR PARTH HALWANE 9699528221 + Artimas Sponsers 1. SP Katta Fast Food Corner 2. LOCA Cafe 3. INTRA Fitness Club 4. Maharashtra Tyres Works"}];      
      const messages1 = "hello";
      const userQuestions=[{id:Number, modelAnswer:"", userQuestion:""}];
      const answerArray=[{answerofQuestion:"this is empty answer"}]
      let questionArray={question:"this is empty question"}
      let userID
      let questionStr="empty question"
      let currQue=""
  
      // messages.push({ role: "user", content: "" });
      
      async function searchAns (){
       
      try {
        console.log("inside try function")
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: messages,
        });
        if(completion.data){
        const completion_text = completion.data.choices[0].message.content;
          let cindex=userQuestions.findIndex((abc)=>abc.id==userID)
          userQuestions[cindex].modelAnswer=completion_text
          str=completion_text
        console.log("text : "+completion_text,"str : "+str);
        
    
     console.log("str : "+str)
        }
       
  
      //   history.push([user_input, completion_text]);
  
     
         
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    }

//   searchAns();
app.put("/setQuestion", async (req,res)=>{
  
  questionStr= req.body.question;
  currQue=req.body.question

console.log("Question is set")
console.log("Current question is : ")
console.log(req.body.question)
userID=req.body.id
messages.push({role:"user",content:req.body.question.toString()})
userQuestions.push({id:req.body.id,userQuestion:req.body.question.toString()})
console.log("Messages array  : ")
console.log(messages)
console.log("userQuestions array is : ")
console.log(userQuestions)
   // console.log(questionArray)
    
    
    
});
const writeConsole=()=>{
  console.log("console function called")
}
app.get("/searchAnswer",  (req,res)=>{
  console.log("calling searchAns function")
  searchAns();
  console.log("Searching process initiated")
  res.send("Searching process initiated")
 //  console.log(answerArray[0].answerofQuestion)
  
  
 //  setInterval(()=> {
 //     console.log("timer is working")
     
 
 //   }, 5000);
 
 
 
    
    });
app.get("/generateAnswer",  (req,res)=>{
 console.log("current answer is : ")
 console.log(str)
//  console.log(answerArray[0].answerofQuestion)
console.log("id going to be searched is ")
console.log(req.query.id)
const q=req.query.id
// let qindex=userQuestions.findIndex((abc)=>abc.id==q)
// console.log(qindex)
// userQuestions[qindex].modelAnswer=str
console.log(userQuestions)

 res.send(userQuestions)
//  setInterval(()=> {
//     console.log("timer is working")
    

//   }, 5000);



   
   });

   app.get("/getQuestions",  (req,res)=>{
    console.log("sending questions")
  
    res.send(userQuestions)
   
   
   
      
      });


  
app.listen(port, ()=>{
    console.log("Server running on port "+port);
});