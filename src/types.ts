export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  year?: string;
  client?: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  subtext: string;
  color?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  text: string;
  avatarUrl: string;
  role: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  popularTags: string[];
}
