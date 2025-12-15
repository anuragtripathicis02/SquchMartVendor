"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const languages = [
  { id: "us", class: "gb", name: "United States" },
  { id: "in", class: "in", name: "India" },
  { id: "am", class: "am", name: "Armenia" },
  { id: "za", class: "za", name: "South Africa" },
];

const LanguageSwitcherCountryName = ({ paramKey = "lang" }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedLang, setSelectedLang] = useState(
    searchParams.get(paramKey) || "us"
  );

  const changeLanguage = (id) => {
    setSelectedLang(id);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramKey, id);
    router.replace(newUrl.toString(), { scroll: false });
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const currentLanguage = languages.find((l) => l.id === selectedLang);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-light dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className={`flag-icon ${currentLanguage?.class} me-2`}></span>
        <span>{currentLanguage?.name || ""}</span>
      </button>

      {dropdownOpen && (
        <ul className="dropdown-menu show">
          {languages.map(({ id, class: flagClass, name }) => (
            <li key={id}>
              <button
                className="dropdown-item d-flex align-items-center"
                onClick={() => changeLanguage(id)}
              >
                <span className={`flag-icon ${flagClass} me-2`}></span>
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherCountryName;
