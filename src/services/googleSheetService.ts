
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

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to submit to Google Sheet. Status:", response.status);
      console.error("Error response:", errorText);
      throw new Error(`Failed to submit to Google Sheet: ${response.status} - ${errorText}`);
    }

    const result = await response.text();
    console.log("Successfully submitted to Google Sheet:", result);
    return result;
  } catch (error) {
    console.error("Network error when submitting to Google Sheet:", error);
    
    // If it's a network error, we'll still save the data locally for debugging
    console.log("Data that failed to submit:", dataToSubmit);
    
    // Re-throw with more specific error message
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error("Network error: Unable to reach Google Sheet. Please check your internet connection or the Google Apps Script configuration.");
    }
    
    throw error;
  }
};
