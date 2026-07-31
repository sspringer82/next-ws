"use client";

import { IxButton, IxInput } from "@siemens/ix-react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";

const Filter: React.FC = () => {
    const [filter, setFilter] = useState<string>('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam) {
            setFilter(filterParam);
        }
    }, [searchParams])

    const router = useRouter();


    function doFilter() {
        router.push(`/movies?filter=${encodeURIComponent(filter)}`);
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        doFilter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <IxInput type="text" value={filter} onValueChange={(e) => {
                setFilter(e.target.value);
            }} />
            <IxButton type="button" onClick={doFilter}>save</IxButton>
        </form>
    )

}
export default Filter;