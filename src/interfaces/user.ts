export interface User {
  id: string;
  congressId: string;
  pmiId: string;
  profileImgUrl: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  areas: string[];
  description: null;
  linkedin: string;
  instagram: string;
  twitter: string;
  visible: boolean;
  type: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
