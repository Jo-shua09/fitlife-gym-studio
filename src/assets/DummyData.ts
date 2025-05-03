import service1 from "/src/assets/images/service1.jpg";
import service2 from "/src/assets/images/service2.jpg";
import service3 from "/src/assets/images/service3.jpg";
import service4 from "/src/assets/images/service4.jpg";
import service5 from "/src/assets/images/service5.jpg";
import service6 from "/src/assets/images/service6.jpg";
import trainer1 from "/src/assets/images/trainer1.jpg";
import trainer2 from "/src/assets/images/trainer2.jpg";
import trainer3 from "/src/assets/images/trainer3.jpg";
import trainer4 from "/src/assets/images/trainer4.jpg";
import trainer5 from "/src/assets/images/trainer5.jpg";
import trainer6 from "/src/assets/images/trainer6.jpg";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}
export const serviceData: Service[] = [
  {
    id: 1,
    image: service1,
    title: "Personal Training",
    description: "Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.",
    buttonText: "learn more",
  },
  {
    id: 2,
    image: service2,
    title: "Group Fitness Classes",
    description: "Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.",
    buttonText: "learn more",
  },
  {
    id: 3,
    image: service3,
    title: "Nutritional Guidance",
    description: "Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.",
    buttonText: "learn more",
  },
  {
    id: 4,
    image: service4,
    title: "Wellness Programs",
    description: "Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.",
    buttonText: "learn more",
  },
  {
    id: 5,
    image: service5,
    title: "Cardio Workouts",
    description: "Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.",
    buttonText: "learn more",
  },
  {
    id: 6,
    image: service6,
    title: "Strength Training",
    description: "Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.",
    buttonText: "learn more",
  },
];

interface Plan {
  id: number;
  middle: boolean;
  type: string;
  amnt: number;
  timeframe: string;
  desc: string[];
  buttonText: string;
}
export const plansData: Plan[] = [
  {
    id: 1,
    middle: false,
    type: "basic plan",
    amnt: 19,
    timeframe: "mo",
    desc: ["Unlimited Access to Gym Equipment", "Access to Group Fitness Classes", "Personalized Workout Plan", "Locker Room Access"],
    buttonText: "get started",
  },
  {
    id: 2,
    middle: true,
    type: "premium plan",
    amnt: 40,
    timeframe: "mo",
    desc: [
      "Unlimited Access to Gym Equipment",
      "Access to Group Fitness Classes",
      "Personal Training Session per Month",
      "Nutritional Guidance and Meal Plans",
      "Access to Wellness Programs",
    ],
    buttonText: "get started",
  },
  {
    id: 3,
    middle: false,
    type: "elite plan",
    amnt: 60,
    timeframe: "mo",
    desc: [
      "All Premium Plan Benefits",
      "Weekly Personal Training Sessions",
      "Customized Advanced Workout Plans",
      "Monthly Wellness Seminars",
      "VIP Access to New Classes",
    ],
    buttonText: "get started",
  },
];

interface Testimonial {
  id: number;
  star: number;
  desc: string;
  image: string;
  name: string;
  abt: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    star: 4,
    desc: "Joining FitLife Studio was the best decision I ever made for my health. The trainers are incredibly supportive, and the personalized programs have helped me achieve results I ",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "John Doe",
    abt: "Marketing Executive",
  },
  {
    id: 2,
    star: 5,
    desc: "FitLife Studio's group classes are so much fun and motivating. I've lost 20 pounds and gained a ton of confidence. The community here is amazing!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Sarah Smith",
    abt: "Graphic Designer",
  },
  {
    id: 3,
    star: 3,
    desc: "The holistic approach at FitLife Studio has improved my overall well-being. The combination of strength training, cardio, and wellness programs has been life-changing.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Mike Johnson",
    abt: "Entrepreneur",
  },
];

interface Trainer {
  id: number;
  image: string;
  name: string;
  profession: string;
}

export const trainerData: Trainer[] = [
  {
    id: 1,
    image: trainer1,
    name: "James Anderson",
    profession: "Head Personal Trainer",
  },
  {
    id: 2,
    image: trainer2,
    name: "Sophia Martinez",
    profession: "Senior Fitness Instructor",
  },
  {
    id: 3,
    image: trainer3,
    name: "Michael Johnson",
    profession: "Strength and Conditioning Coach",
  },
  {
    id: 4,
    image: trainer4,
    name: "Emily Davis",
    profession: "Yoga and Wellness Instructor",
  },
  {
    id: 5,
    image: trainer5,
    name: "Daniel Thompson",
    profession: "Nutrition and Health Coach",
  },
  {
    id: 6,
    image: trainer6,
    name: "Olivia Brown",
    profession: "Group Fitness Coordinator",
  },
];
