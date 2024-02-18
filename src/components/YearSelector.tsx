import React from "react";

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  isDarkMode: boolean;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  selectedYear,
  onYearChange,
  isDarkMode,
}) => {
  const startYear = 1930;
  const endYear = 2030;

  return (
    <div className="max-sm:mb-2">
      <label
        htmlFor="year"
        className={`mr-2 font-normal ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
        
      >
        Year:
      </label>
      <select
        id="year"
        onChange={(e) => onYearChange(parseInt(e.target.value, 10))}
        value={selectedYear}
        className={`p-2 rounded-md ${
          isDarkMode ? "text-white dark-mode-scroll" : "bg-gray-200 text-white"
        }`}
        style={isDarkMode ? { background: "#262626" } : {background: "#262626"}}
      >
        {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
          <option key={index} value={startYear + index}>
            {startYear + index}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
