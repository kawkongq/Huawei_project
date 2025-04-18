"use client";
import React, { useState } from "react";
import Map from "@/components/Map";
import SearchBar from "@/components/search_bar";

export default function Page() {
    const [province, setProvince] = useState<string | undefined>("");

    return (
        <div>
            <SearchBar onSearch={(p) => setProvince(p)} />
            <Map searchedProvince={province} />
        </div>
    );
}
