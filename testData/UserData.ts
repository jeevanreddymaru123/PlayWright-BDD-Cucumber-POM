export const USER_CREDENTIALS = {
  username: "alexey.cherpovodskiy@abcfitness.com",
  password: "Hello123!",
      
}

export const GMAILUSER_CREDENTIALS = {
  username: "bharathavr2k1@gmail.com",
  password: "Bharath*123",
      
}

export const SET_NEWPASSWORD = {
  username: "Insights_Playwright_Automation_Service_Account@fitnessbi.com",
  newPassword: "Hello12345!",
      
}

export const MAILBOX = {
  mailUrl: "https://outlook.office.com/",
  username: "Insights_Playwright_Automation_Service_Account@fitnessbi.com",
  password: "Nun_582044"

}
 
export const LOGIN_CREDENTIALS: Record<string, { username: string; password: string }> = {
  "Global Admin": { username: "alexey.cherpovodskiy@abcfitness.com", password: "Hello123!"},
  "Analyze Admin": { username: "bharathavr2k1@gmail.com", password: "Bharath*123" },
  "Analyze Manager": { username: "analyzemanager@example.com", password: "password123" },
  "Analyze Reports Viewer": { username: "analyzereportsviewer@example.com", password: "password123" },
  "Customize Admin": { username: "customizeadmin@example.com", password: "password123" },
  "Customize Manager": { username: "customizemanager@example.com", password: "password123" },
  "Customize Reports Viewer": { username: "customizereportsviewer@example.com", password: "password123" },
};

export const BASE_URL = {
  testEnv: "https://test.fitnessbi.com",
  stgEnv: "https://v2.fitnessbi.com",
  prodEnv: "https://app.fitnessbi.com",
  local: "https://localhost:5001",
}[process.env.ENV || "testEnv"];

