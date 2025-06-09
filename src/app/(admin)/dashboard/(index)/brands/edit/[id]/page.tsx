import { Tedit } from "@/types";
import FormBrand from "../../_components/form-brand";

export default function EditPage({ params }: Tedit) {
    console.log(params.id);

    return <FormBrand />;
}
