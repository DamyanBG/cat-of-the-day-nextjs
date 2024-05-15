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
}

export interface CatFormWrapperProps {
    photoSectionEl: JSX.Element;
    formEl: JSX.Element;
}

export interface CatPhotoUploadProps {
    isUploading: boolean;
    onUpload: (file: File) => void;
}
