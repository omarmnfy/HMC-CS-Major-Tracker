export interface Course {
  id: string;
  name: string;
}

export interface OneOfRequirement {
  type: 'one_of';
  courses: Course[];
}

export interface Requirement {
  category: string;
  name: string;
  courses: Course[];
}

export interface Major {
  _id?: string;
  major: string;
  requirements: Requirement[];
}

export interface MajorProgress {
  checked: CheckedState;
  creditProgress: CreditProgress;
}

export interface CheckedState {
  [key: string]: boolean;
}

export interface CreditProgress {
  [key: string]: number;
}

export interface AllProgress {
  [majorName: string]: MajorProgress;
}

export interface RoadmapProps {
  requirements: Requirement[];
  checked: CheckedState;
  onToggle: (label: string, course: string) => void;
}

export interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  bgColor?: string;
  progressColor?: string;
  textColor?: string;
} 