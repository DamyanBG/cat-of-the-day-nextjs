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
    photoDropZoneEl: JSX.Element;
    formEl: JSX.Element;
}
