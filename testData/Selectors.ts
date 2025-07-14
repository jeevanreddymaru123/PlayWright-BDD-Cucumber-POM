import date from "date-and-time";
const now = new Date();
const Currentdate = JSON.parse(JSON.stringify(date.format(now, "YYYYMMDD")));
const dataSet = JSON.parse(
  JSON.stringify(require("../testData/Datavalidation.json"))
);

//Login Page locators
export const USERNAME = "#email";
export const PASSWORD = "#password-label";
export const LOGIN_BTN = "#mui-1";
export const INVALID_MESSAGE =
  "//div[contains(text(),'Wrong e-mail or password!')]";
export const POPUP_CLOSE = "(//button[normalize-space()='Done'])";
export const TITLE = "ABC Fitness";

//Login with gmail account locators
export const CLICK_GMAIL_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[3]";
export const EMAIL_PLACEHOLDER = "#identifierId";
export const CLICK_NEXT = "//span[normalize-space()='Next']";
export const PASSWORD_PLACEHOLDER = "input[name='password']";

//Login with windows account locators
export const CLICK_WINDOWS_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[2]";

//Forgot Password locators
export const FORGOT_PASSWORD_BTN =
  ".MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.css-p6xw2y";
export const OUTLOOK_EMAIL = "https://login.microsoftonline.com/";
export const ENTER_USERNAME = "(//input[@id='i0116'])[1]";
export const ENTER_NEXT = "#idSIButton9";
export const ENTER_PASSWORD = "(//input[@id='i0118'])[1]";
export const ENTER_SIGNIN = "#idSIButton9";
export const TEXT_DISPLAY_CLICK = "(//img[@role='presentation'])[1]";
export const CLICK_Next_BTN = "#idSubmit_ProofUp_Redirect";
export const SKIP_OTP = "a[role='link']";
export const SELECT_EMAIL_LINK = "(//div[@class='EeHm8'])[2]";
export const CLICK_SETPASSWORD = "//a[normalize-space()='Set new password']";
export const TYPE_NEWPASSWORD = "//input[@id='password']";
export const TYPE_CONFIRMNEWPASSWORD = "//input[@id='confirmPassword']";
export const NEWPASSWORD_SUBMIT_BTN =
  "(//button[normalize-space()='Submit'])[1]";

//Select Workspace Name locators
export const SELECT_REFRESHBOARD =
  "//button[normalize-space()='Refresh your browser']";
export const WORKSPACE_SEARCHBOX = "#dashbord-search";
export const WORKSPACE_IMG = `//p[@aria-label='${dataSet.validate_workspace}']`;

//Create New User locators
export const CREATE_USER_BTN =
  "(//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel'])[2]";
export const ENTER_EMAIL = "//input[@name='Email']";
export const ENTER_PHONE = "//input[@name='Phone']";
export const SELECT_ROLE =
  ".MuiSelect-select.MuiSelect-outlined.MuiOutlinedInput-input.MuiInputBase-input.css-qiwgdb";
export const LIST_ROLE = "//ul[@role='listbox']";
export const LIST_ROLE_TEXT = `//li[normalize-space()='${dataSet.Select_Role}']`;
export const SUCCESS_MESSAGE =
  "//div[contains(text(),'User created successfully!')]";

//Edit User locators
export const USER_SEARCH_BOX = "#users-search";
export const DOTACTION = "//*[name()='path' and contains(@d,'M12 8c1.1 ')]";
export const DOT_ACTION =
  "tbody tr:nth-child(5) td:nth-child(1) div:nth-child(1) button:nth-child(1)";
export const EDIT_BTN = "//span[normalize-space()='Edit']";

//Delete User locators
export const ROW_COUNT = "tbody tr";

//Bulk Create User locators
export const BULK_CREATE_USER_BTN =
  "//button[normalize-space()='Bulk Create Users']";
export const SELECT_UPLOAD = "//span[contains(text(),'Click to upload')]";
export const UPLOAD_CSVFILE = "//input[@type='file']";
export const SENDEMAIL_BULKUSER =
  "//button[normalize-space()='Send Emails For Bulk Users']";
export const CONFIRM_BULKUSER_MESSAGE =
  "//span[normalize-space()='Your file Template.csv succesfully uploaded']";
export const BULKUSER_SUCCESS =
  "//div[contains(text(),'Bulk Users Created Successfully')]";
export const MESSAGE_BULKUSER_SUCCESS =
  "//div[contains(text(),'Emails Triggered to Pending Users successfully!')]";
export const FILELOCATION = "./UploadFiles/Template.csv";
export const FILELOCATION1 = "./UploadFiles/Image 2.jpg";
export const FILELOCATION2 = "./UploadFiles/Logo1.png";

//Global ABC Rpeorts Book Marks locators
export const SELECT_GLOBAL_BOOKMARK =
  "//button[normalize-space()='Global ABC Reports Bookmarks']";
export const SELECT_SPECIFIC_DASHBOARD =
  "//p[contains(text(),'Freeze Analysis')]";
export const REFRESH_DASHBOARD =
  "//button[@class='reportsToolbarItem css-p8i7nt']//*[name()='svg']";
export const BACK_TO_LIST = "button[class='reportsToolbarItem css-1ffh2v8']";

//Add to Favorite Page locators
export const SELECT_ANALYZE_BTN = "(//button[normalize-space()='analyze'])[1]";
export const SELECT_DASHBOARD_TAB_FAV =
  "//span[normalize-space()='Dashboards']";
export const SELECT_ANALYZE_DASHBOARD_LIST_SPECIFIC =
  "(//img[@alt='card_image'])[6]";
export const SELECT_CUSTOMIZE_DASHBOARD_LIST_SPECIFIC =
  "(//img[@alt='card_image'])[5]";
export const MARK_ANALYZE_FAVORITE_BTN =
  "(//button[contains(@type,'button')])[21]";
export const MARK_CUSTOMIZE_FAVORITE_BTN =
  "(//button[contains(@type,'button')])[19]";
export const SELECT_FAVORITE_PAGE = "//span[normalize-space()='Favorites']";
export const COLORYELLOW = "//*[@fill='#E6BA46']";
export const SELECT_REPORT_LIST_SPECIFIC =
  "//tbody/tr[5]/td[1]/div[1]/div[1]//*[name()='svg']";
export const SELECT_PAGINATED_REPORT_FAVORITE_BTN =
  "tbody tr:nth-child(5) td:nth-child(2)";
export const MARK_REPORTS_FAVORITE_BTN = "//tbody/tr[5]/td[1]/div/div";
export const SELECT_FAVORITES_REPORTS = "//button[normalize-space()='Reports']";
export const BACK_TO_LIST_REPORTS =
  "//button[normalize-space()='Back to list']//*[name()='svg']";
export const SELECT_ADHOCREPORT_LIST_SPECIFIC =
  "(//div[@data-testid='adhoc-link-wrapper'])[5]";
export const SELECT_ADHOCREPORTS_TAB_FAV =
  "//button[normalize-space()='Adhoc Reports']";
export const SELECT_QUICKFACTS_TAB_FAV =
  "//button[normalize-space()='Quick facts']";
export const MARK_ADHOCREPORTS_FAVORITE_BTN =
  "//div[17]//div[1]//button[1]";

//Saved Dashboards locators
export const SELECT_SAVED_DASHBOARD = "//button[normalize-space()='Saved']";
export const MARK_SAVED_DASHBOARD = "(//*[name()='svg'])[30]";
export const MARK_CUSTOME_SAVED_DASHBOARD = "(//*[name()='svg'])[29]";

//Quick Facts locators
export const SELECT_QUICKFACTS = "//span[normalize-space()='Quick Facts']";
export const MARK_FAV_QUICKFACTS = "(//button[@type='button'])[7]";
export const CLICK_QUICKFACTS =
  "(//div[contains(@class,'MuiBox-root css-0')][normalize-space()='F'])[2]";

//User Login with Different roles options locators
export const SELECT_ADHOC_REPORT_BTN =
  "//span[normalize-space()='Ad Hoc Reports']";
export const ADHOCREPORT_TITLE = "//h1[normalize-space()='Ad Hoc Reports']";
export const SELECT_USERROLE_NAME =
  "(//*[name()='path'][@fill-rule='evenodd'])[2]";
export const CLK_WORKSPACE_SETTINGS =
  "//li[normalize-space()='Workspace settings']";
export const HOME_PAGE = "//span[normalize-space()='Home']";
export const SELECT_BRAND = "//button[normalize-space()='Brand']";
export const SELECT_TAGS = "//button[normalize-space()='Tags']";
export const SELECT_USERS = "//button[normalize-space()='Users']";
export const SELECT_PROFILE_MENU = "div[id='account-menu'] li:nth-child(1)";
export const VIEW_ROLE_NAME = "//input[@id='role'][1]";
export const HIDE_DATASET = "//span[normalize-space()='Datasets']";
export const HIDE_KPI = "//span[normalize-space()='KPI library']";
export const RECENTDASHBOARD_HEADER =
  "//div[contains(text(),'Recent Dashboards')]";
export const FAVORITE_REPORTS_HEADER =
  "//div[contains(text(),'Favorite Reports')]";
export const ENTER_PHONENO_PROFILE_MENU = "//input[@id='phone']";
export const UPDATE_PERSONAL_INFO = "//button[normalize-space()='Update']";
export const UPLOAD_PHOTO =
  "label[for='contained-button-file'] span[class='MuiTouchRipple-root css-w0pj6f']";
export const CLICK_RETEST_PASSWORD =
  "//button[normalize-space()='Reset password']";
export const SELECT_PROFILE = "(//button[normalize-space()='Profile'])[1]";

//Recent Pages tab locators
export const RECENT_TAB = "//span[normalize-space()='Recent']";
export const LAST_RECENT_TIME = "(//span[contains(text(),'minute')])[1]";
export const SELECT_REPORTS_TAB_LEFTMENU =
  "//span[normalize-space()='Reports']";
export const CLICK_REPORTS =
  "//span[normalize-space()='Annual Fee Audit (Legacy)']";
export const BACKTO_LIST_REPORTS = "//button[normalize-space()='Back to list']";
export const CLICK_ADHOC_REPORTS =
  "(//div[@data-testid='adhoc-link-wrapper'])[8]";

//Exported reports page Locators
export const SELECT_EXPORTED_PAGE =
  "//span[normalize-space()='Exported reports']";
export const SELECT_DASHBOARD_PAGE = "//button[normalize-space()='Dashboards']";
export const CLICK_DOWNLOAD = "//tbody/tr[1]/td[5]/div[1]//*[name()='svg']";
export const SEARCH_EXPORTED_DASHBOARD = "#abc-workspaces-search";

//Date Picker locators
export const DATE_PLACEHOLDER = "//input[@placeholder='mm/dd/yyyy']";
export const NEXT_DATE = "//button[@title='Next month']//*[name()='svg']";
export const SELECT_DATE = "//button[normalize-space()='2']";

//Create Adhoc Reports functionality locators
export const CREATE_ADHOC_BTN = "//button[normalize-space()='Create Report']";
export const CLICK_DATASET = "//div[normalize-space()='KPIs Analytical Data']";
export const CLICK_LIVEDATA = "//p[normalize-space()='Live Data'";
export const SELECT_DATASET = "//ul[@role='listbox']/li";
export const DATASET = "KPIs Analytical Data";
export const LIVEDATA = "Live Data";
export const SELECT_DATASET_CATEGORY = "//li[@role='option']";
export const DATASET_CATEGORY2 =
  "//span[@class='jss729'][normalize-space()='Please select']";
export const DATASET_CATEGORY_VALUE = "Club & Members";
export const LIVEDATA_CATEGORY_VALUE = "Members";
export const LIVEDATA_SUB_CATEGORY_VALUE = "Members";
export const SELECT_DRAG_DATAFIELD_VALUE =
  "//div[contains(text(),'Average Length of stay in Months')]";
export const SELECT_DROP_DATAFIELD_VALUE =
  "//div[contains(text(),'Drag and drop ')]";
export const ENTER_ADHOC_REPORT_NAME = "(//input[@id='outlined-input'])[2]";
export const ENTER_REPORT_NAME = "(//input[@id='outlined-input'])";
export const ADHOC_REPORT_SEARCH = "//input[@id='adhoc-search']";
export const ENTER_REPORT_DESCRIPTION =
  "//textarea[@id='outlined-multiline-flexible']";
export const VALIDATE_REPORT_CREATED = `//span[normalize-space()='SAMPLE ${Currentdate}']`;
export const REPORT_SUCCESS_MESSAGE = `//div[contains(text(),'Report Report ${Currentdate} successfully created')]`;
export const ADHOC_REPORT_DOT_ACTION =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const SELECT_ADHOC_REPORT_TO_DELETE =
  "//div[17]//div[1]//button[2]//*[name()='svg']";
export const ADHOC_EDIT_BTN = "div[id='menu'] li:nth-child(3)";
export const SELECT_DRAG_DATAFIELD_VALUE1 =
  "//div[contains(text(),'Average Lifetime Spend')]";
export const SELECT_SPECIFIC_ADHOC_REPORT =
  "//div[7]//div[1]//button[2]//*[name()='svg']";
export const REPORTVALUE = "Adhoc Report Creation";
export const REPORTVALUELIVEDATA = "Adhoc Report Creation with Live Data";
export const SELECT_ADD_TO_TAG_ADHOC="li:nth-child(2) span:nth-child(2)";
export const ADD_TAG_TO_ADHOC="//div[@data-testid='tag-item'][5]"
export const SELECT_CATEGORY="//div[contains(text(),'Category')]"
export const CLICK_MEMBER_CATEGORY="(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[15]"
export const SELECT_SCHEDULES="//div[contains(text(),'Scheduled')]"
export const CLICK_YES_SCHEDULE="(//input[@type='checkbox'])[7]"
export const SELECT_CREATED_BY="//div[contains(text(),'Created By')]"
export const CLICK_USER_CREATED_BY="(//input[@type='checkbox'])[12]"
export const SELECT_SHARE_WITH_ME="//div[contains(text(),'Shared with me')]"
export const CLICK_SHARE_USER="(//input[@type='checkbox'])[15]"
export const SELECT_FAVORITES="//div[contains(text(),'Favorites')]"
export const CLICK_FAVORITE="(//input[@type='checkbox'])[17]"
export const CLEAR_FILTERS="//button[normalize-space()='Clear all']"


//Create Adhoc Reports Email Schedules locators
export const CLICK_REPORT_ACTION =
  "//button[normalize-space()='Report actions']";
export const SELECT_SCEDULES_OPTION =
  "//li[normalize-space()='Report schedules']";
export const CLICK_ADDSCHEDULE = "//button[normalize-space()='Add Schedule']";
export const DATEPLACEHOLDER = "//input[@placeholder='mm/dd/yyyy']";
export const DATEPLACEHOLDER_NEW = ".MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.jss2936.css-feqhe6"
export const REPORTS_DATEPLACEHOLDER =
  "//input[@class='MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2']";
export const CLICK_DATEPICKER =
  "//button[@aria-label='Choose date']//*[name()='svg']";
export const DATEPICKER =
  "(//div[@class='MuiPickersFadeTransitionGroup-root css-1bx5ylf'])[1]";
export const NEXT_MONTH_CLICK =
  "//button[@title='Next month']//*[name()='svg']";
export const PREVIOUS_MONTH_CLICK =
  "//button[@title='Previous month']//*[name()='svg']";
export const LIST_OF_DATES = "//div[@role='rowgroup']";
export const EMAIL_FREQUENCY = "//div[contains(text(),'Daily')]";
export const EMAIL_FREQUENCY1 = "(//div[@role='button'])[11]";
export const FREQUENCY_OPTIONS = "ul>li";
export const FREQUENCYVALUE = "Daily";
export const FREQUENCYVALUE1 = "Weekly";
export const ADHOC_REPORT_TYPE = "(//div[@aria-haspopup='listbox'])[2]";
export const REPORT_TYPE = "(//div[normalize-space()='Please select'])[1]";
export const REPORTTYPEVALUE = "Microsoft Excel";
export const EMAIL_SUBJECT = "//input[@placeholder='Type text here']";
export const SUBSCRIBER_LIST_CLICK = "(//button[@title='Open'])[1]";
export const SUBSCRIBERS_OPTIONS = "//div[@data-testid='chip-item']";
export const INTERNAL_SUBSCRIBERS_OPTIONS = "//div[@data-testid='chip-item']";
export const SUBSCRIBERSVALUE = "AlexCheARVtree";
export const INTERNAL_SUBSCRIBERSVALUE = "oleg petrenko";

//Edit Adhoc Reports Email Schedules locators
export const CLICK_EDITSCHEDULE =
  "(//*[name()='svg'][@data-testid='edit-btn-icon'])[1]";

//Delete Adhoc Reports Email Schedules locators
export const CLICK_DELETESCHEDULE =
  "(//*[name()='path'][@fill-rule='evenodd'])[6]";

//Create adhoc reports sharing permission locators
export const CLICK_SHAREREPORT = "//li[normalize-space()='Share report']";
export const CLICK_SEARCH_SHARE_EMAIL = "//input[@id='share-user-search']";
export const CLICK_CHECKBOX = "//input[@type='checkbox']";
export const CLICK_UPDATE = "//button[normalize-space()='Update']";

//Copy adhoc reports from Source to Destination locators
export const CLICK_ADMINISTRATION =
  "//button[normalize-space()='Administrative actions']";
export const CLICK_COPYTO = "//li[@role='menuitem']";
export const CLICK_DESTINATION_WORKSPACE =
  "//*[name()='path' and contains(@d,'M7 10l5 5 ')]";

//Create PreDefined Reports locators
export const WORKSPACE_IMG1 =
  "//p[@aria-label='[DO NOT TOUCH] System Reports']";
export const WORKSPACE_IMG2 = "//p[@aria-label='PIM CoreFam [Test]']";
export const SELECT_PREDEFINED_REPORT = "(//button[@role='button'])[3]";
export const SELECT_DOWNARROW =
  "//*[name()='path' and contains(@d,'m7 10 5 5 ')]";
export const SEARCH_WORKSPACE = "#workspaces-search";
export const SELECT_LISTOF_WORKSPACE =
  "(//ul[contains(@class,'MuiList-root MuiList-padding css-1ontqvh')])[1]";
export const CLICK_WORKSPACE = "(//input[@type='checkbox'])[5]";
export const COPYTO_SYSTEM = "li:nth-child(2)";
export const WORKSPACE_HOMEPAGE = "//span[normalize-space()='Home']";

// Duplicate PreDefined Reports locators
export const CLICK_DUPLICATE = "li:nth-child(4) span:nth-child(2)";
export const GET_DUPLICATE_REPORT = "//span[normalize-space()='SAMPLE']";

//Analyze DashBoard View Tags,Download,Saved & Search Dashboards locators
export const CLICK_TO_VIEW_TAG =
  "(//span[@class='MuiTouchRipple-root css-w0pj6f'])[20]";
export const SELECT_ADDTOTAG = "//span[contains(text(),'Add to tag')]";
export const MARK_TAG = `//span[normalize-space()='${dataSet.TAG_NAME}']`;
export const ACTION_BTN = "//button[normalize-space()='Actions']";
export const PDF_DOWNLOAD = "//div[contains(text(),'Export to PDF')]";
export const DASHBOARD_SUCCESSMESSAGE =
  "//div[contains(text(),'Dashboard exported successfully')]";

//Analyze Dashboard QuickDates Settings locators
export const DASHBOARD_SEARCH = "#dashbord-search";
export const QUICKDATES_SETTINGS = "//img[@alt='card_image']";
export const SELECT_QUICKDATES = "//p[contains(text(),'Month To Date')]";
export const SELECT_LAST_MONTH = "//p[contains(text(),'Last Month')]";

//Analyze Dashboards Save in Saved Options locators
export const SAVED_DASHBOARD = "//div[contains(text(),'Save PowerBI report')]";
export const ENTER_DASHBOARD_NAME_TXTBOX =
  "(//input[@placeholder='Enter new name for the dashboard'])";
export const PRESS_OK_BTN = "//button[normalize-space()='Ok']";
export const SELECT_SAVED_MENUOPTION = "//button[normalize-space()='Saved']";
export const SELECT_SHARE_BTN = "//span[normalize-space()='Share']";
export const SEARCH_SHARE_OPTION = "#share-user-search";
export const SAVED_REFRESH = "//div[contains(text(),'Refresh')]";
export const SAVED_UPDATE = "//div[contains(text(),'Update')]";

//Customize DashBoard View Tags,Download,Saved & Search Dashboards locators
export const SELECT_CUSTOMIZE_OPTION = "#simple-tab-1";
export const CLICK_TO_VIEW_CUSTOMIZE_TAG =
  "(//span[@class='MuiTouchRipple-root css-w0pj6f'])[21]";
export const CLICK_SAVE_AS = "//div[contains(text(),'Save As')]";

// Customize QuickFacts & Customize DataSet locators
export const SELECT_QUICKFACTS_ADDTOTAG =
  "(//span[@class='MuiTouchRipple-root css-w0pj6f'])[15]";

//Customize DataSets View and Search locators
export const SELECT_CUSTOMIZE_DATASETS = "//span[normalize-space()='Datasets']";
export const DATASET_SEARCH = "#datasets-search";
export const CLICK_NEW_CUSTOM_DASHBOARD =
  "//div[contains(text(),'New Custom Dashboard')]";

//Paginated Reports View and Tag locators
export const SEARCH_REPORTS = "#reports-search";
export const SORT_REPORT = "(//*[name()='path'][@fill-rule='evenodd'])[3]";

//Paginated Reports Scheduled Report locators
export const CLICK_SPECIFIC_REPORT =
  "//span[normalize-space()='DRDR']";
export const CLICK_THREE_DOT_ACTION_REPORT =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]";
export const CLICK_TO_VIEW_REPORT = "//span[contains(text(),'View')]";
export const SELECT_REPORT_SCHEDULES = "ul>li:nth-child(2)";
export const SELECT_QUEUE_REPORT = "ul>li:nth-child(1)";
export const CLICK_SCHEDULING_CYCLE = "(//div[@role='button'])[9]";
export const SELECT_NEXTMONTH = "//li[normalize-space()='Next Month']";
export const SELECT_LOCATION = "(//div[@role='button'])[10]";
export const CLICK_LOCATIONVALUE = "ul>li:nth-child(1)";
export const CLICK_LOCATION_QUEUE = "li:nth-child(15)";
export const SELECT_SPECIFIC_LOCATION =
  "li:nth-child(1) div:nth-child(2) span:nth-child(1)";
export const LOCATION_CLICK = "//div[contains(text(),'Recurrence')]";
export const CLICK_INTERNAL_SCHEDULE =
  "//p[contains(text(),'Internal Schedule')]";
export const FRAME_LOCATOR_CLASS = "//iframe[@class='rdlEmbed-host-container']";
export const FRAME_LOCATOR_CLUB_INPUT = "//input[@id='Clubs-input']";

//Delete Paginated Reports Email Schedules locators
export const CLICK_DELETESCHEDULE_PAGINATED_REPORT =
  "(//*[name()='path'][@fill-rule='evenodd'])[5]";

// Create Global Admin Users Locators
export const CLICK_CREATEADMIN =
  "(//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel'])[1]";
export const SELECT_INTERNAL_ABC_ADMIN_OPTION = "//input[@value='1']";

// Edit or View Global Admin Users Locators
export const GLOBAL_ADMIN_SEARCH = "//input[@id='user-panel-search']";
export const CLICK_THREEDOT_ACTION =
  "//button[@role='button']//*[name()='svg']";
export const SELECT_GLOBAL_WORKSPACE_ACCESS =
  "li:nth-child(1) span:nth-child(2)";
export const SELECT_WORKSPACE_ACCESS_TAG =
  "//span[normalize-space()='Corporate']";
export const CLICK_SORT_BTN =
  "//div[@data-testid='arrow-up-icon']//*[name()='svg']";

//Delete Global Admin User Locators
export const CLICK_ON_DELETE_ADMIN = "li:nth-child(2) span:nth-child(2)";

//Create Workspace access Locators
export const SELECT_WORKSPACE_ACCESS =
  "//button[normalize-space()='Workspace Access']";
export const CREATE_ACCESS_BTN =
  "//button[@data-testid='create-bucket-button']";
export const SELECT_USER_FROMLIST = "//input[@placeholder='Please select']";
export const SELECT_ANALYZE_WORKSPACE =
  "(//div[contains(@data-testid,'please-select')][normalize-space()='Please select'])[1]";
export const WORKSPACE_SEARCH = "#options-search";
export const SELECT_ANALYZE_WORKSPACE_CHKBOX =
  "(//input[contains(@type,'checkbox')])[2]";
export const SELECT_CUSTOMIZE_WORKSPACE_CHKBOX =
  "(//input[@type='checkbox'])[4]";
export const SELECT_OTHER_WORKSPACE_CHKBOX =
  "(//input[contains(@type,'checkbox')])[3]";
export const SELECT_CUSTOMIZE_WORKSPACE =
  "(//div[contains(@data-testid,'please-select')][normalize-space()='Please select'])[2]";
export const SELECT_OTHER_WORKSPACE =
  "(//div[contains(@data-testid,'please-select')][normalize-space()='Please select'])[3]";
export const SELECT_ANALYZE_ARROW_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]";
export const SELECT_CUSTOMIZE_ARROW_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[6]";
export const SELECT_OTHER_ARROW_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[7]";

//Edit Workspace access Locators'
export const DELETE_USER_ACCESS="(//*[name()='svg'][contains(@class,'MuiChip-deleteIcon MuiChip-deleteIconMedium MuiChip-deleteIconColorDefault MuiChip-deleteIconOutlinedColorDefault css-vubbuv')])[1]"
export const EDIT_WORKSPACE_ACCESS =
  "(//*[name()='path'][@fill-rule='evenodd'])[13]";
export const OPEN_USER_LIST="//button[@title='Open']//*[name()='svg']"

//Delete Workspace access locators
export const DELETE_WORKSPACE_ACCESS =
  "(//*[name()='svg'][@class='MuiChip-deleteIcon MuiChip-deleteIconMedium MuiChip-deleteIconColorDefault MuiChip-deleteIconOutlinedColorDefault'])[20]";

//Create Demo Workspace access Locators
export const SELECT_DEMO_WORKSPACE_ACCESS =
  "//button[normalize-space()='Demo Workspaces']";
export const CLICK_FILTER_ICON =
  "(//*[name()='path'][@fill-rule='evenodd'])[3]";
export const SELECT_DATABASE_FILTER =
  "//div[contains(text(),'Select database filter')]";
export const CLICK_ON_PRODUCT = "li[role='option']";
export const DEMO_WORKSPACE_ACCESS_SEARCH = "#demo-workspaces-search";
export const CLICK_ON_ACTIONS =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const CLICK_ON_DETAILS = "//span[contains(text(),'Details')]";

//Create ABC Workspace access Locators
export const SELECT_ABC_WORKSPACE_ACCESS =
  "//button[normalize-space()='ABC Workspaces']";
export const ABC_WORKSPACE_ACCESS_SEARCH = "#abc-workspaces-search";
export const CLICK_ON_DOWNARROW =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const INSIGHT_ANALYZE_TOGGLE_BTN =
  "(//span[@class='MuiSwitch-switchBase MuiSwitch-colorPrimary MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root css-1nr2wod'])[1]";
export const FITNESSBI_TOGGLE_BTN =
  "(//span[@class='MuiSwitch-switchBase MuiSwitch-colorPrimary MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root css-1nr2wod'])[1]";

//Create Corporate Workspace access Locators
export const SELECT_CORPORATE_WORKSPACE_ACCESS =
  "//button[normalize-space()='Corporate Workspaces']";
export const CORPORATE_WORKSPACE_ACCESS_SEARCH =
  "#franchisor-workspaces-search";
export const CLICK_ON_CORPORATE_ACTIONS =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]";

//Workspace Settings Billing Page Locators
export const SELECT_BILLING_TAB = "//button[normalize-space()='Billing']";
export const MOVE_TOGGLE_BTN =
  "(//span[@class='MuiSwitch-thumb css-19gndve'])[1]";
export const BILLING_END_DATE =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const SELECT_DATE_CALENDAR =
  "(//div[@class='MuiPickersFadeTransitionGroup-root css-1bx5ylf'])[1]";
export const CHANGE_PLAN = "//div[contains(text(),'Change plan')]";
export const NUMBER_OF_CLUBS = "//input[@id='number of clubs']";
export const FEE_DETAILS = "(//div)[82]//input[@id='monthly fee']";
export const SUBSCRIPTION_UPDATE_SUBMIT_BTN =
  "//button[normalize-space()='Submit']";
export const REVERT_BILLING =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[3]";

//Workspace Settings Brand Page Locators
export const SELECT_BRAND_TAB = "//button[normalize-space()='Brand']";
export const BRAND_STATUS_DROP_DOWN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[3]";
export const SELECT_BRAND_LIST = "//input[@value='Need mapping']";
export const LOCATION_DROP_DOWN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const LOCATION_LIST =
  "(//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-segi59'])[2]";
export const CREATE_LABEL_BTN =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]";
export const ENTER_LABEL_NAME = "#label-name";
export const SELECT_CLUB_LIST =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[7]";
export const CLICK_ON_CLUB =
  "(//span[@class='MuiChip-label MuiChip-labelMedium css-9iedg7'])[1]";
export const SELECT_USERS_LIST =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[8]";
export const CLICK_ON_USER = `(//span[normalize-space()='${dataSet.Select_User}'])`;
export const SAVE_LABLE_BTN = "//button[@data-testid='save-drawer-btn']";
export const SELECT_MOUSE_ROW = "(//tr[contains(@role,'checkbox')])[4]";
export const EDIT_LABEL = "//tbody/tr[4]/td[4]/div[1]//*[name()='svg'][1]";
export const DELETE_LABEL = "//tbody/tr[4]/td[4]/div[1]//*[name()='svg'][2]";
export const CLICK_TO_UPLOAD = "//span[contains(text(),'Click to upload')]";
export const CLICK_TO_UPLOAD_CLOUD =
  "//*[name()='path' and contains(@d,'M20.3738 6')]";
export const SEARCH_CLUB = "//input[@id='franchisor-dashboard-search']";
export const SORT_CLUB =
  "(//span[@role='button'][normalize-space()='Name'])[2]";
export const MOUSEOVER_CLUBS_LIST = "(//tbody)[2]//tr[2]";
export const EDIT_CLUBS_LIST = "//tbody/tr[2]/td[5]/div[1]//*[name()='svg']";
export const ENTER_CLUB_NAME = "(//input[@name='Name'])[2]";

//Workspace Settings Tags Creation Locators
export const SELECT_TAGS_TAB = "//button[normalize-space()='Tags']";
export const CREATE_TAG_BTN =
  "(//span[@class='MuiTouchRipple-root css-w0pj6f'])[19]";
export const SELECT_USERS_LIST_TAG =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[4]";
export const SELECT_DASHBOARD_LIST_TAG =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]";
export const SELECT_REPORTS_LIST_TAG =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[6]";
export const SELECT_QUICKFACTS_TAG =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[7]";
export const SELECT_ADHOCREPORTS_TAG =
  "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[8]";

//Workspace Settings Edit Tag locators
export const EDIT_TAG_BTN = "(//*[name()='path'][@fill-rule='evenodd'])[51]";

//Workspace Settings Delete Tags locators
export const DELETE_TAG_BTN = "(//*[name()='path'][@fill-rule='evenodd'])[79]";

//Create Global Search in HomePage Locators
export const CLICK_ON_GLOBAL_SEARCH = "#global-search";
export const SEARCH_SPECIFIC_DASHBOARD =
  "//div[@role='presentation']//div[3]//div[1]//p[1]";
export const CLICK_ON_INVALID_GLOBAL_SEARCH =
  "//div[contains(text(),'No options found')]";

//Create Workspace in homepage Locators
export const CREATE_WORKSPACE_BTN = "//span[contains(text(),'Create')]";
export const SELECT_WORKSPACE = "//span[normalize-space()='Workspace']";
export const ENTER_WORKSPACE_NAME = "//input[@id='name']";
export const PRESS_OK = "//button[normalize-space()='Ok']";

// Common locators or re usable locators
export const SELECT_USERS_TAB = "//button[normalize-space()='Users']";
export const SAVE_BTN = "//button[normalize-space()='Save']";
export const SAVECANCEL_BTN = "(//button[normalize-space()='Save'])[1]";
export const VIEW_BTN = "//span[normalize-space()='View']";
export const SAVE_EXIT_BTN = "//button[normalize-space()='Save & Exit']";
export const DELETE_BTN = "//span[normalize-space()='Delete']";
export const CONFIRM_BTN = "//button[normalize-space()='Confirm']";
export const SELECT_DASHBOARD = "//button[normalize-space()='Dashboards']";
export const SELECT_DASHBOARD_LEFTMENU =
  "//span[normalize-space()='Dashboards']";
export const CLOSEACTION = "//*[name()='path' and contains(@d,'M19 6.41 1')]";
export const SELECT_ADMIN_PANEL = "//span[contains(text(),'Admin Panel')]";
export const CLICK_BACKTOLIST = "//button[normalize-space()='Back to list']";
export const ENTER_NAME = "//input[@name='Name']";
export const ENTER_DESCRIPTION = "//textarea[@name='Description']";
