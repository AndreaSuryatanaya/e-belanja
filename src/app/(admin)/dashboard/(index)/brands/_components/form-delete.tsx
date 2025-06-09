import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { deleteBrandById } from "../lib/actions";
import { ActionResult } from "@/types";

const initialState: ActionResult = {
    error: "",
};

interface FormDeleteProps {
    id: number;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" variant="destructive" size="sm" disabled={pending}>
            <Trash className="w-4 h-4 mr-2" /> {pending ? "Loading..." : "Delete"}
        </Button>
    );
}

export default function FormDelete({ id }: FormDeleteProps) {
    const deleteBrandWithId = (_: unknown, formData: FormData) => deleteBrandById(_, formData, id);
    const [state, formAction] = useFormState(deleteBrandWithId, initialState);
    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    );
}
