import React from "react";

interface MonthSelectorProps {
  selectedMonth: number;
  onMonthChange: (month: number) => void;
  isDarkMode: boolean;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  selectedMonth,
  onMonthChange,
  isDarkMode,
}) => {
  return (
    <div className="max-sm:mb-2 ml-4">
      <label
        htmlFor="month"
        className={`mr-2 font-normal ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Month:
      </label>
      <select
        id="month"
        onChange={(e) => onMonthChange(parseInt(e.target.value, 10))}
        value={selectedMonth}
        className={`p-2 rounded-md ${
          isDarkMode ? " text-white dark-mode-scroll" : "bg-gray-200 text-white"
        }`}
        
        style={isDarkMode ? { background: "#262626" } : {background: "#262626"}}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <option key={index} value={index}>
            {new Date(2000, index, 1).toLocaleString("default", {
              month: "long",
            })}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
