import { FormWrapperProps } from "@/types/components";

const FormWrapper = ({ children, title, text }: FormWrapperProps) => {
  return (
    <main className="container mx-auto my-12 px-4 md:px-6 min-h-[70vh]">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{text}</p>
        </div>
        <div className="rounded-lg border border-[#1e40af] bg-[#f1f5f9] p-6 shadow-lg dark:border-[#1e40af] dark:bg-[#0f172a]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default FormWrapper;
