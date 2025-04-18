// components/search_bar.tsx
import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (provinceName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm.trim());
        }
    };

    return (
        <div style={{ position: "absolute", top: 20, left: 20, zIndex: 1000 }}>
            <input
                type="text"
                placeholder="ค้นหาจังหวัด"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc",color: "#1a1a1a",backgroundColor: "#ffffff" }}
            />
            <button onClick={handleSearch} style={{ marginLeft: "8px", padding: "8px 12px", color: "#1a1a1a" }}>
                ค้นหา
            </button>
        </div>
    );
};

export default SearchBar;
