import { Vote, MyCatType } from "./cat";

export interface FormWrapperProps {
  children: JSX.Element;
  title: string;
  text: string;
}

export interface FormProps {
  isSubmitting: boolean;
}

export interface UserConditionalLinkProps {
  falsyHref: string;
  falsyText: string;
  truthyHref: string;
  truthyText: string;
  userConditionKey?: string;
}

export interface CatFormWrapperProps {
  photoSectionEl: JSX.Element;
  formEl: JSX.Element;
}

export interface CatPhotoUploadProps {
  isUploading: boolean;
  onUpload: (file: File) => void;
}

export interface VoteSectionProps {
  catImgSrc: string;
  onVote: (vote: Vote) => void;
}

export interface MustLogInProps {
  title: string;
  text: string;
}

export interface MyCatProps {
  myCat: MyCatType
}
