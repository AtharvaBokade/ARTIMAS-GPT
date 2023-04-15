const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");
require("dotenv").config();

(async () => {
  const configuration = new Configuration({
    apiKey:"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",
  });
  const openai = new OpenAIApi(configuration);

//   const history = [];

  while (true) {
    // const user_input = readlineSync.question("Your input: ");

    const messages = [{role:"user",content:"name is vijay and my age is 19"}];
    

    messages.push({ role: "user", content: " write my name and age based on previuos sentence" });

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      const completion_text = completion.data.choices[0].message.content;
      console.log(completion_text);

    //   history.push([user_input, completion_text]);

      const user_input_again = readlineSync.question(
        "\nWould you like to continue the conversation? (Y/N)"
      );
      if (user_input_again.toUpperCase() === "N") {
        return;
      } else if (user_input_again.toUpperCase() !== "Y") {
        console.log("Invalid input. Please enter 'Y' or 'N'.");
        return;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
})();