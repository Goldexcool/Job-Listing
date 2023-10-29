import React from 'react';
import photosnap from '../Images/photosnap.svg';
import manage from '../Images/manage.svg';
import account from '../Images/account.svg';
import myhome from '../Images/myhome.svg';
import loopstudios from '../Images/loop-studios.svg';
import faceit from '../Images/faceit.svg';
import shortly from '../Images/shortly.svg';

interface Job {
    id: number;
    Image01: string;
    company: string;
    new: boolean;
    featured: boolean;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    languauges: string[]; 
    tools: string[]; 
}

const jobs: Job[] = [
    {
        id: 1,
        Image01: photosnap,
        company: "Photosnap",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languauges: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        tools: [""]
    },
    {
        id: 2,
        Image01: manage,
        company: "Manage",
        new: true,
        featured: true,
        position: "Fullstack Developer",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languauges: ["Fullstack", "Midweight", "Python", "React"],
        tools: [""]
    },
    {
        id: 3,
        Image01: account,
        company: "Account",
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languauges: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
        tools: [""]
    
    },
    {
        id: 4,
        Image01: myhome,
        company: "MyHome",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languauges: ["Frontend", "Junior", "CSS", "JavaScript"],
        tools: [""]
    },
    {
        id: 5,
        Image01: loopstudios,
        company: "Loop Studios",
        new: false,
        featured: false,
        position: "Software Engineer",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languauges: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
        tools: [""]
    },
    {
        id: 6,
        Image01: faceit,
        company: "FaceIt",
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languauges: ["Backend", "Junior", "Ruby", "RoR"],
        tools: [""]
    },
    {
        id: 7,
        Image01: shortly,
        company: "Shortly",
        new: false,
        featured: false,
        position: "Junior Developer",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languauges: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
        tools: [""]
    }

];
export default jobs;