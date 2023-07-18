import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name:{type:String, require:true},
    email: { type: String},
    password: {
      type: String},
    facebookId: {
      type: String,
    },
    twitterId: {
      type: String,
    },
    instagramId: {
      type: String,  
    },
    googleId: {
      type: String,     
    },
    linkedinId: {
      type: String,
    },
    youtubeId: {
      type: String,
    },
    loginType: {
      type: String,
    },
    avatar: {
      type: String,
      storage: 'storage',
    },
    GoogleId: { type: String },
    firstName: { type: String },
    gender: { type: String },
    status: { type: String },
    education: { type: String },
    employ: { type: String },
    city: {
      type: String,
      ref: "ApiCity",
    },
    country: {
      type: String,
      ref: "ApiCity",
    },
    exchangeRate: { type: Number },
    questionRate: { type: Number },
    birthDate: { type: String},
    phoneNumber: { type: String},
    operator: {
      type: String,
      ref: "Operator",
    },
    interests: {
      type: String,
      ref: "Interest",
    },
    clientsGifts: {
      type: String,
      ref: "Client",
    },
    isVerified: { type:Boolean },
    isNotificationAllowed: {
      type: Boolean,
    },
    verificationCode: {
      type: Number,
    },
    passwordCode: {
      type: Number,
    },
    totalCredits: { type: Number },
    currentCredits: { type: Number },
    spentCredits: { type: Number },
    totalBalance: { type: Number },
    plan: { type: String, ref: "Plan" },
    rank: { type: String, ref: "Rank"},
    usedNumberOfReferrals: { type: Number},
    usedUserReferralCodes: {
      type:  Array,      
    },
    referralCode: {
      type: String,
      ref: "ReferralCode",
    },
    activeReferralCodes: {
      type: String,
      ref: "ReferralCode"
    },
    updatedReferrals: { type: Boolean},
    disabledReferralCodes: {
      type: Array,
    },
    filledSurveyId: {
      type: Array, 
    },
    likedGiftId: {
      type: Array      
    },
    isReferralCodeClaimed: { type: Boolean},
    claimedReferralCode: { type: String},
    code: { type: String },
    pendingVideos: { type: Array },
    language: { type: String},
    lastAdOnCall: { type: String },
    lastSubmittedAdOnCall: { type: String},
    currentAdsOnCall: { type: Array },
    callLocations: { type: Array },
    lastCallLocation: { type: String, },
    geoLocation: {
      type: String,
      label: "Geo Location",
    },
    numberOfWeeklyInteractions: {
      type: Number,
    },
    numberOfWeeklyKafuAdds: {
      type: Number,
    },
    isProfileCompleted: { type: Boolean },
    userRegisteredDevice: { type: String},
    registeredOn: { type: String },
    isActivated: { type: Boolean},
    pendingPoints: {
      type: Number,
    },
    receivedAdOnCallPoints: {
      type: Boolean,
    },
    interactions: {
      type: Array,    
    },
    kafuAdds: {
      type: Array,      
    },
},{timestamps:true});

export default mongoose.model("user",userModel);