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
    status: "hired",
    dateApplied: "February 20, 2024",
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
    status: "not hired",
    dateApplied: "February 25, 2024",
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
    status: "interviewing",
    dateApplied: "March 20, 2024",
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
    status: "interviewing",
    dateApplied: "March 15, 2024",
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
    status: "hired",
    dateApplied: "April 2, 2024",
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
    status: "not hired",
    dateApplied: "April 10, 2024",
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
    status: "offered",
    dateApplied: "April 11, 2024",
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
    status: "not interested",
    dateApplied: "April 14, 2024",
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
    status: "hired",
    dateApplied: "April 15, 2024",
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
import { MdLogout, MdClose } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";
import { FaHandHolding } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

export const status = [
  {
    id: 1,
    value: "applied",
    content: "Applied",
    icon: <MdLogout />,
    bg: "bg-success",
  },
  {
    id: 2,
    value: "interview",
    content: "Interviewing",
    icon: <AiOutlineWechat />,
    bg: "bg-success",
  },
  {
    id: 3,
    value: "offer",
    content: "Recieved Offer",
    icon: <FaHandHolding />,
    bg: "bg-success",
  },
  {
    id: 4,
    value: "hired",
    content: "Hired By Employer",
    icon: <FaThumbsUp />,
    bg: "bg-success",
  },
  {
    id: 5,
    value: "not hired",
    content: "Not Hired By Employer",
    icon: <FaThumbsDown />,
    bg: "bg-danger",
  },
  {
    id: 6,
    value: "not interested",
    content: "No Longer Interested",
    icon: <MdClose />,
    bg: "bg-danger",
  },
];
