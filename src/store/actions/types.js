import { app_config } from "../../../src/constants";

// cures
export const SELECTED_CURE = "SELECTED_CURE";

// // live server base api url
// export const BASE_API_URL = app_config.BASE_API_URL;
// export const FB_URL = app_config.FB_URL;

// // PUBLIC = 1 OR CORPORATE = 2 OR HYBRID = 3
// export const APP_TYPE = app_config.APP_TYPE;
// export const SERVER_TYPE = app_config.SERVER_TYPE;

// // DEV, TEST, PROD
// export const NODE_ENV = "DEV";
// export const DEFAULT_PROFILE_PIC = "DEFAULT_PROFILE_PIC";
// export const ORG_THOUGHTS = "ORG_THOUGHTS";
// export const PLDP_THOUGHTS = "PLDP_THOUGHTS";
// export const PLDP_ARTICLES = "PLDP_ARTICLES";
// export const PLDP_PODCASTS = "PLDP_PODCASTS";
// export const PLDP_VIDEOS = "PLDP_VIDEOS";
// export const GET_SELECTED_ROW = "GET_SELECTED_ROW";
// export const ILEAD_THOUGHTS = "ILEAD_THOUGHTS";
// export const CORP_ILEAD_THOUGHTS = "CORP_ILEAD_THOUGHTS";
// export const GC_THOUGHTS = "GC_THOUGHTS";
// export const DAILY_THOUGHTS = "DAILY_THOUGHTS";
// export const MY_THOUGHTS = "MY_THOUGHTS";
// export const ALL_GROUPS_POSTS = "ALL_GROUPS_POSTS";
// export const SELECTED_GROUP_POSTS = "SELECTED_GROUP_POSTS";
// export const FILTERED_GROUP_POST = "FILTERED_GROUP_POST";

// export const MY_ARTICLES = "MY_ARTICLES";
// export const INTERNAL_ARTICLES = "INTERNAL_ARTICLES";
// export const EXTERNAL_ARTICLES = "EXTERNAL_ARTICLES";

// export const MY_PODCASTS = "MY_PODCASTS";
// export const INTERNAL_PODCASTS = "INTERNAL_PODCASTS";
// export const EXTERNAL_PODCASTS = "EXTERNAL_PODCASTS";

// export const MY_VIDEOS = "MY_VIDEOS";
// export const INTERNAL_VIDEOS = "INTERNAL_VIDEOS";
// export const EXTERNAL_VIDEOS = "EXTERNAL_VIDEOS";

// export const FILTERED_POST = "FILTERED_POST";

// // ATTACHMENTS

// export const GET_MY_PLDP_TASKS = "GET_MY_PLDP_TASKS";
// export const CREATE_PLDP_TASK = "CREATE_NEW_PLDP_TASK";
// export const GET_COMPANY_VALUES = "GET_COMPANY_VALUES";
// export const DELETE_PLDP_TASK = "DELETE_PLDP_TASK";

// // MYPLDP FAVORITES
// export const GET_MYPLPD_FAVORITES = "GET_MYPLPD_FAVORITES";

// export const GET_ACTIVE_COMPANIES = "GET_ACTIVE_COMPANIES";
// export const GET_COMPANY_ANALYTICS = "GET_COMPANY_ANALYTICS";
// export const GET_ACTIVE_COMPANY_USERS = "GET_ACTIVE_COMPANY_USERS";
// export const GET_COMPANY_COUNTS = "GET_COMPANY_COUNTS";
// export const GET_UNSEEN_NOTIFICATIONS = "GET_UNSEEN_NOTIFICATIONS";
// export const GET_UNSEEN_GROUP_NOTIFICATIONS = "GET_UNSEEN_GROUP_NOTIFICATIONS";
// export const GET_UNSEEN_PLDP_NOTIFICATIONS = "GET_UNSEEN_PLDP_NOTIFICATIONS";
// export const SET_SEEN_NOTIFICATIONS = "SET_SEEN_NOTIFICATIONS";
// export const SET_SEEN_GROUP_NOTIFICATIONS = "SET_SEEN_GROUP_NOTIFICATIONS";
// export const SEEN_NOTIFICATIONS = "SEEN_NOTIFICATIONS";
// export const SET_SEEN_PLDP_NOTIFICATIONS = "SET_SEEN_PLDP_NOTIFICATIONS";

// export const MY_FOLLOWERS = "MY_FOLLOWERS";
// export const MY_NOTIFICATIONS = "MY_NOTIFICATIONS";
// export const MY_PLDP_NOTIFICATIONS = "MY_PLDP_NOTIFICATIONS";

// export const GLP_TUTORIALS = "GLP_TUTORIALS";
// export const COMPANY_STAFF = "COMPANY_STAFF";
// export const COMPANY_ANALYTICS = "COMPANY_ANALYTICS";
// export const POST_ANALYTICS = "POST_ANALYTICS";
// export const USER_CLICKS_POST = "USER_CLICKS_POST";
// export const OPEN_POST_FROM_WEB = "OPEN_POST_FROM_WEB";
// export const USER_CLICKS_SECTION = "USER_CLICKS_SECTION";

// export const CREATE_THOUGHT = "CREATE_THOUGHT";
// export const CREATE_VIDEO = "CREATE_VIDEO";
// export const CREATE_ARTICLE = "CREATE_ARTICLE";
// export const CREATE_PODCAST = "CREATE_PODCAST";

// export const UPDATE_POST_LIKING = "UPDATE_POST_LIKING";

// // COMMENTS
// export const CREATE_COMMENT = "CREATE_COMMENT";
// export const DELETE_COMMENT = "DELETE_COMMENT";

// // COMPANY ADMIN
// export const GET_ALL_COMPANY_USERS = "GET_ALL_COMPANY_USERS";
// export const UPDATE_COMPANY_USER = "UPDATE_COMPANY_USER";
// export const DELETE_COMPANY_USER = "DELETE_COMPANY_USER";
// export const CREATE_COMPANY_USER = "CREATE_COMPANY_USER";
// export const ERROR_CREATING_COMPANY_USER = "ERROR_CREATING_COMPANY_USER";
// export const USER_EXISTS = "USER_EXISTS";

// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const YEARSELECTED = "YEARSELECTED";
// export const MONTHSELECTED = "MONTHSELECTED";
// export const DAYSELECTED = "DAYSELECTED";
// export const HOURSELECTED = "HOURSELECTED";
// export const MINUTESELECTED = "MINUTESELECTED";
// export const LOGIN_ERROR = "LOGIN_ERROR";
// export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";

// export const SHOW_TOAST = "SHOW_TOAST";
// export const HIDE_TOAST = "HIDE_TOAST";
// export const SHOW_LOADER = "SHOW_LOADER";
// export const HIDE_LOADER = "HIDE_LOADER";
// export const ERROR = "error";
// export const WARNING = "warning";
// export const INFO = "info";
// export const SUCCESS = "success";

// //TUTORIALS
// export const GET_CORP_TUTORIALS = "GET_CORP_TUTORIALS";
// export const GET_PUBLIC_TUTORIALS = "GET_PUBLIC_TUTORIALS";

// // USER PROFILE DIALOG
// export const SHOW_EDIT_USER_DIALOG = "SHOW_EDIT_USER_DIALOG";
// export const SHOW_USER_PROFILE_DIALOG = "SHOW_USER_PROFILE_DIALOG";
// export const LOG_USER_PROFILE_DIALOG = "LOG_USER_PROFILE_DIALOG";
// export const UPDATE_USER_PROFILE_DIALOG = "UPDATE_USER_PROFILE_DIALOG";
// export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
// export const CLEAR_UPDATE_USER_SUCCESS = "CLEAR_UPDATE_USER_SUCCESS";

// // FOLLOWING
// export const FOLLOW_USER = "FOLLOW_USER";
// export const UNFOLLOW_USER = "UNFOLLOW_USER";
// export const UPDATE_MY_FOLLOWERS = "UPDATE_MY_FOLLOWERS";

// //FEEDBACK
// export const CREATE_FEEDBACK = "CREATE_FEEDBACK";

// // TEST
// var USER_LOGGED = JSON.parse(localStorage.getItem("GLP_LOGGED_PROFILE"));

// export const COMPANY_ID = USER_LOGGED ? USER_LOGGED.companyID : "";
// export const JOURNAL_USER_ID = USER_LOGGED ? USER_LOGGED.userID : "";
// export const JOURNAL_USER_NAME = USER_LOGGED
//   ? USER_LOGGED.firstName + " " + USER_LOGGED.lastName
//   : "";
// export const JOURNAL_PHOTOURL = USER_LOGGED ? USER_LOGGED.photoURL : "";
// export const PUBLIC_COMPANY_ID = "-LEiZPT-C2PyLu_YLKNU";

// // USER SPECIFIC DATA
// export const USER_ANALYTICS = "USER_ANALYTICS";
// export const USER_FOLLOWERS = "USER_FOLLOWERS";
// export const USER_FOLLOWING = "USER_FOLLOWING";
// export const USER_NOTIFICATIONS = "USER_NOTIFICATIONS";
// export const USER_PLDP_NOTIFICATIONS = "USER_PLDP_NOTIFICATIONS";
// export const USER_GROUP_NOTIFICATIONS = "USER_GROUP_NOTIFICATIONS";
// export const VIEW_USER_PROFILE = "VIEW_USER_PROFILE";
// export const USER_BIOGRAPHY = "USER_BIOGRAPHY";

// export const USER_LOGGED_IN = "USER_LOGGED_IN";
// export const GLP_LOGGED_PROFILE = "GLP_LOGGED_PROFILE";
// export const GLP_LOGGED_COMPANY = "GLP_LOGGED_COMPANY";

// // CREATE POSTS STATUS
// export const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
// export const CREATE_ARTICLE_ERROR = "CREATE_ARTICLE_ERROR";

// export const CREATE_THOUGHT_SUCCESS = "CREATE_THOUGHT_SUCCESS";
// export const CREATE_THOUGHT_ERROR = "CREATE_THOUGHT_ERROR";

// export const CREATE_PODCAST_SUCCESS = "CREATE_PODCAST_SUCCESS";
// export const CREATE_PODCAST_ERROR = "CREATE_PODCAST_ERROR";

// export const CREATE_VIDEO_SUCCESS = "CREATE_VIDEO_SUCCESS";
// export const CREATE_VIDEO_ERROR = "CREATE_VIDEO_ERROR";

// // User Types Restrictions
// // 3 - i-lead, 5 - master contributor, 10 - Corporate ileader, 11 - Organisational contributor, 9 - Daily User
// export const RESTRICTED_USER_TYPES = {
//   3: true,
//   5: true,
//   10: true
// };

// // 4 - Global Contributor, 7 - Company Admin, 11 - Organisational contributor, 9 - Daily User
// export const CAN_POST_ORG_ILEAD = {
//   3: true,
//   4: true,
//   7: true,
//   9: true,
//   10: true,
//   11: true
// };

// // 9 - Daily User
// export const CAN_POST_DAILY = {
//   9: true
// };

// export const CAN_POST_INTERNAL = {
//   4: true,
//   7: true,
//   10: true,
//   11: true
// };

// export const NEW_CORP_USERS = [
//   { id: 8, value: "Standard User" },
//   { id: 10, value: "Corporate I-Leader" },
//   { id: 11, value: "Organisational Contributor" },
//   { id: 7, value: 'Company Admin' }
// ];

// export const NEW_PUBLIC_USERS = [
//   { id: 8, value: "Standard User" },
//   { id: 3, value: "Public I-Leader" },
//   { id: 11, value: "Organisational Contributor" },
//   { id: 7, value: 'Company Admin' }
// ];

// // Global contributors
// export const CAN_POST_GLOBAL = {
//   4: true
// };

// // Standar User
// export const BLOCKED_USER_TYPES = {
//   8: true
// };

// // Can access company profile
// // 7 - Company Admin, 4 - GC,
// // PUBLIC APP - ONLY Leadership Platform users
// // CORPORATE APP - ONLY Admins & GCs
// // -LDVbbRyIMhukVtTVQ0n - OneConnect
// // -KgsUcgfo7z1U9MXgd9i - Leadership Platform
// export const ACCESS_COMPANY_PROFILE = {
//   "-LDVbbRyIMhukVtTVQ0n": true,
//   "-KgsUcgfo7z1U9MXgd9i": true,
//   4: true,
//   7: true,
//   superUser: true
// };

// export const ACCESS_COMPANY_PROFILE_USER = {
//   4: true,
//   7: true,
//   superUser: true
// };

// export const IS_COMPANY_ADMIN = {
//   7: true
// };

// // App URLs
// export const APP_URL_TITLE = {
//   "/": APP_TYPE === "PUBLIC" ? "I-LEAD" : "Organisational",
//   "/organisational": "Organisational",
//   "/ilead": "I-LEAD",
//   "/globalcontributors": "Global Contributors",
//   "/daily": "Daily Thoughts",
//   "/myposts": "My Posts",
//   "/videos": "Videos",
//   "/podcasts": "Podcasts & Audio",
//   "/articles": "Articles",
//   "/ebooks": "eBooks",
//   "/pldp": "Personal LDP",
//   "/analytics": "Analytics",
//   "/companyadmin": "Company Admin",
//   "/tutorials": "GLP Tutorials",
//   "/tcs": "GLP T&Cs",
//   "/userprofile": "User Profile",
//   "/organisational": "Organisational",
//   "/groupmessages": "My Groups"
// };

// // App URLs
// export const HIDE_ADD_BTN = {
//   "/pldp": true,
//   "/analytics": true,
//   "/companyadmin": true,
//   "/tutorials": true,
//   "/tcs": true,
//   "/userprofile": true,
//   "/pldp/companyvalues": true,
//   "/pldp/": true,
//   "/analytics/": true,
//   "/companyadmin/": true,
//   "/tutorials/": true,
//   "/tcs/": true,
//   "/userprofile/": true,
//   "/pldp/companyvalues/": true
// };

// //post types
// export const postTypes = {
//   thoughts: "dailyThoughts",
//   articles: "news",
//   podcasts: "podcasts",
//   videos: "videos",
//   groupposts: "group-posts",
// };
