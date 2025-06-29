import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../../components/layout";
import { Button } from "../../components/ui";
import {
  EMPLOYEES_DATA,
  DEPARTMENT_OPTIONS,
  ROLE_OPTIONS,
  getTotalEmployees,
  getEmployeeAvatar,
  AVATAR_PATHS,
  ICON_PATHS,
} from "../../data/employees";

const Dashboard = () => {
 
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [openTeams, setOpenTeams] = useState({
    "Servis Ekibi": true,
    "Mutfak Ekibi": true,
    "İdari İşler": true,
  });

  const toggleTeam = (teamName) => {
    setOpenTeams((prev) => ({
      ...prev,
      [teamName]: !prev[teamName],
    }));
  };

  const totalEmployees = getTotalEmployees();

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Container>
        <div className="py-4 lg:py-4 grid gap-3 lg:gap-4 w-full mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-row justify-center sm:justify-center sm:items-center gap-2 lg:gap-4 w-full lg:w-auto">
              <div className="flex flex-row gap-2 w-full sm:w-auto  lg:w-80 xl:w-80 items-center">
                <div className="py-2 px-3 border text-red-500 border-red-500 rounded-md text-xs sm:text-sm whitespace-nowrap w-fit">
                  Bugün
                </div>
                <div className="border border-gray-300 text-gray-600 bg-white flex pl-2 pr-3 py-2 justify-start items-center gap-2 rounded-md text-xs sm:text-sm w-full sm:flex-1">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="hidden sm:inline">
                    Pazartesi, 16 Haz, 2025
                  </span>
                  <span className="sm:hidden">16 Haz, 2025</span>
                </div>
              </div>
              <div className="flex justify-center items-center py-1 gap-2  sm:gap-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 cursor-pointer hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 cursor-pointer hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full lg:w-auto">
              <select
                className="w-full lg:w-auto pl-2 pr-8 py-2 border border-gray-300 rounded-md text-xs sm:text-sm bg-white focus:outline-none focus:border-gray-400 appearance-none"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {DEPARTMENT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="absolute right-0  px-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-col lg:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <div className="relative w-full  lg:w-80 xl:w-80 ">
                <input
                  type="text"
                  placeholder="Ad, Soyad"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md text-xs sm:text-sm bg-white focus:outline-none focus:border-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-full lg:w-auto">
                <select
                  className="w-full lg:w-auto pl-2 pr-8 py-2 border border-gray-300 rounded-md text-xs sm:text-sm bg-white focus:outline-none focus:border-gray-400 appearance-none"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="absolute right-0  px-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-auto">
              <select className="w-full lg:w-auto pl-8 sm:pl-10 pr-10 sm:pr-14 py-2 border border-gray-300 rounded-md text-xs sm:text-sm bg-white focus:outline-none focus:border-gray-400 appearance-none min-w-0 sm:min-w-48">
                <option>Sorunlu kayıtları göster</option>
                <option>Diğer seçenek 1</option>
                <option>Diğer seçenek 2</option>
              </select>

              <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2">
                <img
                  src={ICON_PATHS.problem}
                  alt="Sorun"
                  className="figma-icon-responsive"
                />
              </div>

              <div className="absolute border-l right-0 px-1 rounded-r-md h-full flex items-center top-1/2 transform -translate-y-1/2 pointer-events-none ">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
          <div className="hidden lg:grid lg:grid-cols-5 bg-white border-gray-200 lg:mx-[42px] pt-8 px-6 py-4 sm:pt-9 md:pt-10 lg:pt-[43px]">
            <div className="figma-text-bold-responsive text-gray-700">
              Ekip Üyeleri ({totalEmployees})
            </div>
            <div className="figma-text-bold-responsive text-gray-700">
              Giriş - Çıkış
            </div>
            <div className="figma-text-bold-responsive text-gray-700">
              Ücretsiz mola
            </div>
            <div className="figma-text-bold-responsive text-gray-700">
              Ücretli mola
            </div>
            <div className="figma-text-bold-responsive text-gray-700">
              Sorunlar
            </div>
            <div></div>
          </div>

          {Object.entries(EMPLOYEES_DATA).map(
            ([teamName, teamMembers], teamIndex) => (
              <div key={teamName}>
                <div
                  className={`lg:ml-[42px] lg:mr-[42px] ${
                    teamIndex === 0 ? "border-t border-l border-r " : ""
                  } ${teamIndex !== 0 ? "border-l border-r " : ""}`}
                >
                  <button
                    onClick={() => toggleTeam(teamName)}
                    className="w-full bg-gray-50 px-4 lg:px-6 py-3 hover:bg-gray-100 transition-colors text-left"
                  >
                    <h3 className="figma-text-bold-responsive text-gray-800 flex items-center">
                      <ChevronDown
                        className={`w-4 h-4 mr-2 transition-transform duration-200 ${
                          openTeams[teamName] ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                      {teamName} ({teamMembers.length})
                    </h3>
                  </button>
                </div>

                {openTeams[teamName] && (
                  <div className="lg:ml-[42px] border lg:mr-[42px] bg-white">
                    {teamMembers.map((employee, memberIndex) => (
                      <div key={employee.id}>
                        <div
                          className={`py-2 px-2 lg:px-0 lg:py-3 hover:bg-gray-50 transition-colors ${
                            memberIndex !== teamMembers.length - 1
                              ? "border-b"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden space-y-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={getEmployeeAvatar(employee)}
                                alt={employee.name}
                                className="figma-avatar-responsive rounded-full object-cover flex-shrink-0"
                                onError={(e) => {
                                  e.target.src = AVATAR_PATHS.default;
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {employee.name}
                                </div>
                                <div className="text-xs text-gray-500 truncate">
                                  {employee.position}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div>
                                <div className="text-gray-500 mb-1">
                                  Giriş - Çıkış
                                </div>
                                <div className="font-medium">
                                  {employee.schedule}
                                </div>
                                <div className="text-gray-600">
                                  {employee.totalHours}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-500 mb-1">
                                  Molalar
                                </div>
                                <div>Ücretsiz: {employee.unpaidBreak}</div>
                                <div>Ücretli: {employee.paidBreak}</div>
                              </div>
                            </div>

                            {employee.status && (
                              <div className="flex items-center space-x-2">
                                <img
                                  src={ICON_PATHS.warning}
                                  alt="Uyarı"
                                  className="figma-icon-responsive"
                                />
                                <span className="text-xs text-red-600">
                                  {employee.status}
                                </span>
                              </div>
                            )}

                            {employee.message && (
                              <div className=" rounded-md ">
                                <div className="flex items-start space-x-2">
                                  <img
                                    src={ICON_PATHS.chat}
                                    alt="Mesaj"
                                    className="figma-icon-responsive flex-shrink-0 mt-0.5"
                                  />
                                  <div className="flex-1 mt-0.5">
                                    <div
                                      className="figma-text-general-responsive font-medium mb-1"
                                      style={{ color: "#07A0AB" }}
                                    >
                                      {employee.name.split(" ")[0]}'den mesaj
                                      var:
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <p className="figma-message-text text-[12px] text-[#565D6D] italic">
                                    "{employee.message.split('"')[1]}"
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="hidden lg:grid lg:grid-cols-5 px-6 lg:items-center">
                            <div className="flex items-center space-x-3">
                              <img
                                src={getEmployeeAvatar(employee)}
                                alt={employee.name}
                                className="figma-avatar-responsive rounded-full object-cover flex-shrink-0"
                                onError={(e) => {
                                  e.target.src = AVATAR_PATHS.default;
                                }}
                              />
                              <div className="min-w-0">
                                <div className="text-[#0B3558] lg:mb-2 truncate figma-text-general-responsive">
                                  {employee.name}
                                </div>
                                <div className="text-xs text-gray-500 truncate">
                                  {employee.position}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="text-[#171A1F] lg:mb-1 figma-text-general-responsive">
                                {employee.schedule}
                              </div>
                              <div className="text-xs text-[#565D6D]">
                                {employee.totalHours}
                              </div>
                            </div>

                            <div className="text-sm text-gray-900 lg:mb-2">
                              {employee.unpaidBreak}
                            </div>
                            <div className="text-sm text-gray-900">
                              {employee.paidBreak}
                            </div>

                            <div>
                              {employee.status && (
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={ICON_PATHS.warning}
                                    alt="Uyarı"
                                    className="figma-icon-responsive"
                                  />
                                  <span className="text-[#171A1F] figma-text-general-responsive">
                                    {employee.status}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {employee.message && (
                            <div className="hidden lg:grid lg:grid-cols-5 mt-2 ">
                              <div></div>
                              <div className="rounded-md ">
                                <div className="flex items-start space-x-2">
                                  <img
                                    src={ICON_PATHS.chat}
                                    alt="Mesaj"
                                    className="figma-icon-responsive flex-shrink-0 mt-0.5"
                                  />
                                  <div className="flex-1 mt-0.5">
                                    <div
                                      className="figma-text-general-responsive font-medium mb-1"
                                      style={{ color: "#07A0AB" }}
                                    >
                                      {employee.name.split(" ")[0]}'den mesaj
                                      var:
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <p className="figma-message-text text-[12px] text-[#565D6D] italic">
                                    "{employee.message.split('"')[1]}"
                                  </p>
                                </div>
                              </div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          <div className="mt-6 ml-2 sm:ml-2 md:ml-10 lg:ml-[42px] mb-11 lg:mb-[59px] lg:px-6 md:px-0 sm:px-0">
            <Button variant="secondary" figmaType="timecard">
              Zaman kartı ekle
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
