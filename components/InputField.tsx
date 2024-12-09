import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
}

export function InputField({ label, id, placeholder }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-slate-50"
      >
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        className="border-gray-300 dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  );
}
