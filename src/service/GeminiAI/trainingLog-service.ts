import OpenAI from "openai";
import dotenv from "dotenv";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { TrainingLog } from "../../entities/TrainingLog";
import { ITrainingLog } from "../../model/TrainingLog-model";

dotenv.config({ quiet: true });

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateTrainingLog = async (
  userData: ITrainingLog,
  userId: string,
) => {
  const model = "gpt-5-nano-2025-08-07";

  const userPrompt = `
   This is User has workout and nutrition summary:

"${userData.workoutSummary}"

Analyze the summary log and provide feedback based on its content. Include:
- Positive aspects (what the user did well)
- Improvements (what can be optimized)
- One motivational tip for next session or day

Focus on workout and/or nutrition depending on what the user logged.
Return only plain text, no markdown or formatting.
    `;

  try {
    const response = await ai.responses.create({
      model: model,
      instructions:
        "You are a certified fitness coach and nutrition expert. You analyze user logs and provide feedback",
      input: userPrompt,
    });
    const trainingLogRepository = AppDataSource.getRepository(TrainingLog);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }
    const newTrainingLog = trainingLogRepository.create({
      workoutSummary: userData.workoutSummary,
      aiFeedback: response.output_text,
      user,
    });
    await trainingLogRepository.save(newTrainingLog);
    return newTrainingLog;
  } catch (error) {
    console.error("Couldn't generate training log");
    return "ERROR: Couldn't generate training log";
  }
};
