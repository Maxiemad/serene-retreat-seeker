
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyR6mFuy1bnAsT8nEDjPLfRDU0GKmUpQoeA5ZHib-G5JwkYFJa8Tg7zwXYX5Kr3K_wV/exec";

interface UserInfo {
  fullName?: string;
  email?: string;
  city?: string;
}

type SurveyAnswers = Record<string, any>;

export const submitToSheet = async (userInfo: UserInfo | null, surveyAnswers: SurveyAnswers) => {
  if (!userInfo) {
    throw new Error("User information is missing.");
  }
  
  const dataToSubmit = {
    name: userInfo.fullName,
    email: userInfo.email,
    city: userInfo.city,
    ...Object.fromEntries(
      Object.entries(surveyAnswers).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(', ') : value,
      ])
    ),
    timestamp: new Date().toISOString()
  };

  console.log("Submitting to Google Sheet:", dataToSubmit);

  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(dataToSubmit),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to submit to Google Sheet:", errorText);
    throw new Error(`Failed to submit to Google Sheet`);
  }

  const result = await response.text();
  console.log("Successfully submitted to Google Sheet:", result);
  return result;
};
