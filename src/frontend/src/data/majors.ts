import { Major } from '../types';

export const csMajor: Major = {
  major: "Computer Science",
  requirements: [
    {
      category: "Core",
      name: "Core Requirements",
      courses: [
        {
          id: "CSCI005",
          name: "Introduction to Computer Science"
        },
        {
          id: "CSCI060",
          name: "Principles of Computer Science"
        },
        {
          id: "CSCI070",
          name: "Data Structures and Program Development"
        },
        {
          id: "CSCI081",
          name: "Computer Systems and Programming"
        },
        {
          id: "CSCI105",
          name: "Computer Systems"
        },
        {
          id: "CSCI121",
          name: "Programming Languages"
        },
        {
          id: "CSCI131",
          name: "Algorithms"
        },
        {
          id: "CSCI140",
          name: "Software Development"
        }
      ]
    },
    {
      category: "Mathematics",
      name: "Mathematics Requirements",
      courses: [
        {
          id: "MATH019",
          name: "Calculus I"
        },
        {
          id: "MATH020",
          name: "Calculus II"
        },
        {
          id: "MATH032",
          name: "Calculus III"
        },
        {
          id: "MATH055",
          name: "Discrete Mathematics"
        },
        {
          id: "MATH060",
          name: "Linear Algebra"
        }
      ]
    },
    {
      category: "Electives",
      name: "CS Electives",
      courses: [
        {
          id: "CSCI151",
          name: "Artificial Intelligence"
        },
        {
          id: "CSCI152",
          name: "Machine Learning"
        },
        {
          id: "CSCI153",
          name: "Computer Graphics"
        },
        {
          id: "CSCI154",
          name: "Computer Networks"
        },
        {
          id: "CSCI155",
          name: "Database Systems"
        },
        {
          id: "CSCI156",
          name: "Operating Systems"
        }
      ]
    },
    {
      category: "Senior Project",
      name: "Senior Project",
      courses: [
        {
          id: "CSCI190",
          name: "Senior Project I"
        },
        {
          id: "CSCI191",
          name: "Senior Project II"
        }
      ]
    }
  ]
}; 