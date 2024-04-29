import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaFacebook, FaAmazon, FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import T1 from "../assets/testimonial1.png";
import T2 from "../assets/testimonial2.png";
import T3 from "../assets/testimonial3.png";

export const jobs = [
  {
    _id: 1,
    title: "Digital Marketer",
    company: "Google",
    salary: "30-40k",
    mode: "full time",
    location: "United Kingdom",
    createdAt: "2 Hours ago",
    logo: <FcGoogle />,
  },
  {
    _id: 2,
    title: "Fullstack Engineer",
    company: "Facebook",
    salary: "50-60k",
    mode: "remote",
    location: "Belgium",
    createdAt: "6 Months ago",
    logo: <FaFacebookF />,
  },
  {
    _id: 3,
    title: "UI/UX Designer",
    company: "LinkedIn",
    salary: "50-60k",
    mode: "part time",
    location: "Lagos",
    createdAt: "2 Days ago",
    logo: <FaLinkedin />,
  },
  {
    _id: 4,
    title: "Frontend Engineer",
    company: "Google",
    salary: "30-40k",
    mode: "full time",
    location: "Abuja",
    createdAt: "6 Months ago",
    logo: <FcGoogle />,
  },
  {
    _id: 5,
    title: "Backend Developer",
    company: "Facebook",
    salary: "70-110k",
    mode: "remote",
    location: "Athens",
    createdAt: "6 Months ago",
    logo: <FaFacebookF />,
  },
  {
    _id: 6,
    title: "UX specialist",
    company: "LinkedIn",
    salary: "50-60k",
    mode: "part time",
    location: "Lagos",
    createdAt: "2 Days ago",
    logo: <FaLinkedin />,
  },
  {
    _id: 7,
    title: "Software Developer",
    company: "Google",
    salary: "70-80k",
    mode: "full time",
    location: "San Francisco",
    createdAt: "1 Week ago",
    logo: <FaGoogle />,
  },

  {
    _id: 8,
    title: "DevOps",
    company: "Facebook",
    salary: "55-65k",
    mode: "contract",
    location: "New York",
    createdAt: "3 Days ago",
    logo: <FaFacebook />,
  },

  {
    _id: 9,
    title: "Data Analyst",
    company: "Amazon",
    salary: "60-70k",
    mode: "remote",
    location: "Seattle",
    createdAt: "4 Days ago",
    logo: <FaAmazon />,
  },
];

export const testimonials = [
  {
    id: 1,
    image: T1,
    name: "John Doe",
    location: "South Africa",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 2,
    image: T2,
    name: "Alice Beck",
    location: "United Kingdom",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 3,
    image: T3,
    name: "Xander Cage",
    location: "Germany",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
];
