export interface IOneOfRequirement {
  type: 'one_of';
  courses: string[];
}

export interface IRequirement {
  type: 'all' | 'one_of' | 'n_of' | 'credits' | 'mixed';
  label?: string;
  courses?: (string | IOneOfRequirement)[];
  n?: number;
  subject?: string;
  credits?: number;
  level?: number;
}

export interface IMajor {
  major: string;
  requirements: IRequirement[];
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  majors: string[];
  checkedCourses: Record<string, boolean>;
}
