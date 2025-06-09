import { redirect } from "next/navigation";
import { getLocationById } from "../../lib/data";
import FormCategory from "../../../categories/_components/form-category";
import FormLocation from "../../_components/form-location";
import { Tedit } from "@/types";

// type Tparams = {
//     id: string;
// };

// interface EditPageProp {
//     params: Tparams;
// }

export default async function EditPage({ params }: Tedit) {
    const data = await getLocationById(params.id);

    if (!data) {
        return redirect("/dashboard/locations");
    }

    console.log(data);

    return <FormLocation type="EDIT" data={data} />;
}
