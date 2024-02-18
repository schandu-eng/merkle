import React, {useEffect, useState} from "react";

import { countries } from ".././constants/countries";
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import useCalendar from ".././hooks/useCalendar";
import YearSelector from ".././components/YearSelector";
import MonthSelector from ".././components/MonthSelector";
import CountrySelector from ".././components/CountrySelector";
import CalendarCell from ".././components/CalendarCell";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CalendarHeader from ".././components/CalendarHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Dialog from '@mui/material/Dialog';

import { useNavigate } from "react-router-dom";
import { trace } from "console";
const List: React.FC = () => {
  const {
    selectedYear,
    selectedMonth,
    selectedCountry,
    isDarkMode,
    holidays,
    loading,
    handleYearChange,
    handleMonthChange,
    handleCountryChange,
    toggleDarkMode,
    handleTodayClick,
    handlePrevYear,
    handlePrevMonth,
    handleNextMonth,
    handleNextYear,
    calendarMatrix,
    selectedDate,
    handleCellClick,
  } = useCalendar();
  useEffect(() => {
    if (loading) {
      toast.info("Showing Holidays...",{autoClose: 2000});
    }
  }, [loading]);
  const [nextType, setNextType] = useState<string | "month">("month");
  const [open, setOpen] = useState(false);
  const [countryName, setCountryName] = useState<string | "India">("India");


  const handleNextType = (type: string) => {
    setNextType(type);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  let flag=true;

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isDarkMode ? "text-white dark-mode-scroll" : "bg-yellow-100 text-gray-900"
      }`}

      style={isDarkMode ? { background: "#161616" } : {}}
    >
      <div className={`flex justify-between items-center w-full px-4 py-3 ${
          isDarkMode
            ? "bg-yellow-300 text-black"
            : "bg-gray-900 text-white"
      }`}>
        <div>Calendar</div>
        <button
          onClick={handleClick}
          className={`h-min px-4 py-2 ${
            isDarkMode
              ? " text-white rounded-xl"
              : "bg-gray-200 text-gray-900 rounded-xl"
          } flex items-center justify-center transition duration-300`}
          
          style={isDarkMode  ? { background: "#262626" } : {}}
        >
          Home
        </button>
        <button
          onClick={toggleDarkMode}
          className={`h-min px-4 py-2 ${
            isDarkMode
              ? " text-white rounded-xl"
              : "bg-gray-200 text-gray-900 rounded-xl"
          } flex items-center justify-center transition duration-300`}
          
          style={isDarkMode  ? { background: "#262626" } : {}}
        >
          {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
        </button>
      </div>
      
      <div className="mb-2 w-full flex flex-col sm:flex-row p-4 items-center font-light text-[9px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[16px]">
  <div className="flex flex-row justify-center ml-36"> {/* Updated line */}
    <YearSelector
      selectedYear={selectedYear}
      onYearChange={handleYearChange}
      isDarkMode={isDarkMode}
    />
    <MonthSelector
      selectedMonth={selectedMonth}
      onMonthChange={handleMonthChange}
      isDarkMode={isDarkMode}
    />
  </div>
  <button
    onClick={() => setOpen(true)}
    className={`h-min px-4 py-2 ml-48 max-sm:mb-2 flex items-center justify-center ${
      isDarkMode
        ? "text-white"
        : "bg-gray-200 text-gray-900"
    } rounded-full transition duration-200`}
    
    style={isDarkMode ? { background: "#262626" } : {}}
  >
    <LocationOnIcon sx={{ fontSize: '1rem', marginRight: '0.25rem' }} />
    <span className="">{countryName}</span>
  </button>
    <Dialog
      open={open}
      onClose={handleClose}
      className="fixed inset-0 z-50 overflow-auto bg-opacity-70 bg-gray-900 backdrop-blur-sm"
      sx={{
        "& .MuiDialog-paper": {
          width: "20rem", // Adjust width as needed
          height: "27rem", // Adjust height as needed
          borderRadius: "10px",
          background:'transparent',
        },
      }}
    >
    <CountrySelector
      setCountryName={setCountryName}
      selectedCountry={selectedCountry}
      onCountryChange={handleCountryChange}
      countries={countries}
      isDarkMode={isDarkMode}
      handleClose={handleClose}
    />
  </Dialog>
  {/* <button
    onClick={handleTodayClick}
    className={`h-min ml-96 px-4 py-2 max-sm:mb-2 ${
      isDarkMode
        ? "text-white"
        : "bg-gray-200 text-gray-900"
    } rounded-full transition duration-300`}
    
    style={isDarkMode ? { background: "#262626" } : {}}
  >
    Today
  </button> */}
</div>

      <div
        className={`text-center mb-12 p-4 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
       
      style={isDarkMode ? { background: "#262626" } : {}}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <button
              onClick= {nextType === "month" ? handlePrevMonth : handlePrevYear}  
              className={`p-2 font-light text-[9px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[16px] ${
                isDarkMode
                  ? " text-white"
                  : "bg-gray-200 text-gray-900"
              } rounded-full transition duration-300`}
              
        style={isDarkMode ? { background: "#161616" } : {}}
            >
              <ArrowLeftOutlinedIcon/>
            </button>
            <button
              onClick= {nextType === "month" ? handleNextMonth : handleNextYear} 
              className={`p-2 mr-2 ml-2 font-light text-[9px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[16px] ${
                isDarkMode
                  ? "text-white"
                  : "bg-gray-200 text-gray-900"
              } rounded-full transition duration-300`}
              
        style={isDarkMode ? { background: "#161616" } : {}}
            >
             <ArrowRightOutlinedIcon/>
            </button>
          </div>

          <h2
            className={`text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {new Date(selectedYear, selectedMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <div>
             <button
              onClick={() => handleNextType('month')}
              disabled={selectedYear === 2030}
              className={`p-2 font-light text-[9px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[16px] ${
                nextType === 'month' ? (
                  isDarkMode ? "bg-white text-black" : "bg-yellow-200 text-black"
                ) : (
                  isDarkMode ? "text-white" : "bg-gray-200 text-gray-900"
                )
              } rounded-full transition duration-300 ${selectedYear === 2030 ? 'cursor-not-allowed' : ''}`}
              
              style={isDarkMode && nextType!=="month" ? { background: "#161616" } : {}}
            >
              Month
            </button>
            <button
               onClick={() => handleNextType('year')}
              disabled={selectedYear === 2030}
              className={`p-2 ml-2 font-light text-[9px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[16px] ${
                nextType === 'year' ? (
                  isDarkMode ? "bg-white text-black" :  "bg-yellow-200 text-black"
                )  : (
                  isDarkMode ? " text-white" : "bg-gray-200 text-gray-900"
                )
              } rounded-full transition duration-300 ${selectedYear === 2030 ? 'cursor-not-allowed' : ''}`}
              
              style={isDarkMode && nextType!=="year" ? { background: "#161616" } : {}}
            >
              Year
            </button>
          </div>
        </div>
        <table >
          <tbody>
          {
            holidays.map((holiday:any,index:number) => {
              
              const { year, month, day } = holiday.date.datetime;
              if (year === selectedYear && month === selectedMonth) {
                flag=false;
              return (
                <tr key={index}>
                    <td className=" w-64 bg-yellow-300 px-4 py-2  whitespace-nowrap text-black">{holiday.name}</td>
                    <td className=" w-64 px-6 py-4 whitespace-nowrap">{holiday.date.iso}</td>

                </tr>
              );
            }
            return null;
          })}
  {flag ? (
      <tr>
        <td className="w-64 text-center"> No Holidays</td>
        
        <td className="w-64 "> </td>
      </tr>
    ) : null}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default List;
