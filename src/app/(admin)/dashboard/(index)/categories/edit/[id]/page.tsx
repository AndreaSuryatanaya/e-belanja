import { redirect } from "next/navigation";
import { getCategoryById } from "../../lib/data";
import FormCategory from "../../_components/form-category";
import { Tedit } from "@/types";

// type Tparams = {
//     id: string;
// };

// interface EditPageProp {
//     params: Tparams;
// }

export default async function EditPage({ params }: Tedit) {
    const data = await getCategoryById(params.id);

    if (!data) {
        return redirect("/dashboard/categories");
    }

    console.log(data);

    return <FormCategory type="EDIT" data={data} />;
}
