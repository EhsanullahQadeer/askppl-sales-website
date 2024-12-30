import influencer1 from "@/assets/images/influencers/influencer1.jpeg";
import influencer2 from "@/assets/images/influencers/influencer2.jpeg";
import influencer3 from "@/assets/images/influencers/influencer3.png";
import influencer4 from "@/assets/images/influencers/influencer4.png";
import influencer5 from "@/assets/images/influencers/influencer5.jpeg";
import ShareStepIcon from "@/assets/icons/ShareStepIcon";
import QuestionStepIcon from "@/assets/icons/QuestionStepIcon";
import MoneyStepIcon from "@/assets/icons/MoneyStepIcon";
import ProfileStepIcon from "@/assets/icons/ProfileStepIcon";

export const faqData = [
  {
    question: "What is askppl?",
    answer: "askppl is a platform where you can get your questions answered.",
  },
  {
    question: "Who can use askppl?",
    answer: "Anyone with an account can use askppl to ask or answer questions.",
  },
  {
    question: "Do I need to verify my identity?",
    answer: "Yes, identity verification is required for certain features.",
  },
  {
    question: "How does monetization work?",
    answer: "Monetization allows verified users to earn through their answers.",
  },
  {
    question: "Can you subscribe to anyone?",
    answer: "Yes, you can subscribe to your favorite creators on askppl.",
  },
  {
    question: "Do I need to pay to ask a question?",
    answer: "No, asking questions is free for all users.",
  },
  {
    question: "What type of offers can verified users create?",
    answer:
      "Verified users can create subscription offers and answer packages.",
  },
  {
    question: "What does the Identity Verification process entail?",
    answer:
      "The process includes submitting documents to verify your identity.",
  },
];

export const purchasedData = [
  {
    price: "$50",
    description: "Q&A Pack Purchased",
    image: influencer1,
  },
  {
    price: "$35",
    description: "Q&A Pack Purchased",
    image: influencer2,
  },
  {
    price: "$32",
    description: "Q&A Pack Purchased",
    image: influencer3,
  },
  {
    price: "$10",
    description: "Q&A Pack Purchased",
    image: influencer4,
  },
  {
    price: "$26",
    description: "Q&A Pack Purchased",
    image: influencer5,
  },
];

export const QAPurchasedData = [...purchasedData, ...purchasedData];

export const incomeData = [
  { followers: 0, income: 0 },
  { followers: 10000, income: 100 },
  { followers: 20000, income: 150 },
  { followers: 30000, income: 200 },
  { followers: 40000, income: 250 },
  { followers: 50000, income: 300 },
  { followers: 75000, income: 750 },
  { followers: 100000, income: 1000 },
  { followers: 150000, income: 2000 },
  { followers: 250000, income: 3500 },
  { followers: 500000, income: 6000 },
  { followers: 750000, income: 10000 },
  { followers: 1000000, income: 15000 },
  { followers: 5000000, income: 100000 },
];

export const earningPathStepsData = [
  {
    step: 1,
    title: "Share your personalized ASKPPL link",
    description:
      "After setting up your profile, share your personalized ASKPPL link with your followers across all platforms. This link acts as your direct channel for paid Q&A interactions.",
    icon:ShareStepIcon
  },
  {
    step: 2,
    title: "Receive questions and engage",
    description: "You can receive questions from them and then give answers.",
    icon:QuestionStepIcon
  },
  {
    step: 3,
    title: "Earn money seamlessly",
    description: "This can make money for you.",
    icon:MoneyStepIcon

  },
  {
    step: 4,
    title: "Sign up and set your profile",
    description: "Sign up and make your profile on AskPPl app.",
    icon:ProfileStepIcon
  },
];
