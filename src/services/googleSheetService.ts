
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLq_KSQTmGgABVTGhbzDNG00mY3CeDAKHFIrgnpzd0IC9orw3fT5sO_RMNcKGmXf97fQ/exec";

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

  console.log("Submitting to Google Sheet URL:", SCRIPT_URL);
  console.log("Data being submitted:", dataToSubmit);

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
      mode: "no-cors" // This helps with CORS issues
    });

    console.log("Request sent successfully");
    
    // With no-cors mode, we can't read the response, so we assume success
    // Save data locally as backup anyway
    const backupKey = `retreat-data-${Date.now()}`;
    localStorage.setItem(backupKey, JSON.stringify(dataToSubmit));
    console.log("Data also saved locally as backup:", backupKey);
    
    return "Data submitted successfully";
  } catch (error) {
    console.error("Network error when submitting to Google Sheet:", error);
    
    // Save data locally as backup
    const backupKey = `retreat-data-${Date.now()}`;
    localStorage.setItem(backupKey, JSON.stringify(dataToSubmit));
    console.log("Data saved locally as backup:", backupKey);
    
    throw new Error("Failed to save to Google Sheet, but your data is saved locally as backup.");
  }
};

// Function to retrieve locally saved data
export const getLocalBackups = () => {
  const backups = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('retreat-data-')) {
      const data = localStorage.getItem(key);
      if (data) {
        backups.push({ key, data: JSON.parse(data) });
      }
    }
  }
  return backups;
};
