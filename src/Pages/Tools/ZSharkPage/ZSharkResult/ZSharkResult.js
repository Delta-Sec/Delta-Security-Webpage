import React, { useState } from "react";
import "./ZSharkResult.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  Brush, // أضف هذين الاثنين
} from "recharts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SsidChartIcon from "@mui/icons-material/SsidChart"; // للرسم البياني
import AssessmentIcon from "@mui/icons-material/Assessment"; // للإحصائيات
import GppBadIcon from "@mui/icons-material/GppBad"; // للتهديدات
export default function ZSharkResult({ data }) {
  const [activeTab, setActiveTab] = useState("chart");

  const analysisData = data;

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // بيانات من ملف الجيسون المرفوع
  const timeStart = new Date(analysisData.start_time);
  const timeEnd = new Date(analysisData.end_time);
  const diffInMs = timeEnd - timeStart;

  const totalSeconds = Math.floor(diffInMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const durationLabel =
    hours > 0 ? `${hours}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`;

  const threatsCount = analysisData.detections
    ? analysisData.detections.length
    : 0; //

  const formatSize = (bytes) => {
    if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + " MB";
    if (bytes >= 1024) return (bytes / 1024).toFixed(1) + " KB";
    return bytes + " B";
  };

  const chartData = analysisData.window_stats.map((win) => ({
    // نستخدم '2-digit' للثواني لأن النوافذ الزمنية متقاربة جداً
    time: new Date(win.start_time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    packets: win.packet_count,
  }));

  const threatsExist = threatsCount > 0;

  const tabStyle = {
    color: "#8b949e", // اللون الرمادي الافتراضي
    fontSize: "0.9rem",
    fontWeight: "bold",
    textTransform: "none",
    minHeight: "45px",
    borderRadius: "8px",
    margin: "0 5px",
    transition: "0.3s",
    // التنسيق عند اختيار التبويب
    "&.Mui-selected": {
      color: "#1BE7FF",
      backgroundColor: "rgba(27, 231, 255, 0.05)",
    },
    "&:hover": {
      color: "#1BE7FF",
      backgroundColor: "rgba(27, 231, 255, 0.02)",
    },
  };

  const threatTabStyle = {
    ...tabStyle,
    color: threatsExist ? "#ff4d4d" : "#8b949e", // أحمر إذا وجد تهديدات، رمادي إذا لم توجد
    "&.Mui-selected": {
      color: threatsExist ? "#ff4d4d" : "#1BE7FF", // أحمر عند التحديد لو وجد تهديدات، أزرق لو لم يوجد
      backgroundColor: threatsExist
        ? "rgba(255, 77, 77, 0.05)"
        : "rgba(27, 231, 255, 0.05)",
    },
    "&:hover": {
      color: threatsExist ? "#ff4d4d" : "#1BE7FF",
    },
  };

  return (
    <div className="zshark-dashboard-container">
      {/* هيدر معلومات البيكاب */}
      <div className="zshark-result-header">
        <div className="pcap-main-info">
          <h2>ANALYSIS RESULT</h2>
          <h1 className="pcap-path-text">{data.pcap_path.split("/").pop()}</h1>
        </div>

        <div className="pcap-stats-group">
          <div className="stat-box main-stat">
            <div className="time-stack">
              <span>
                {timeStart.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
                <span> - </span>
                {timeEnd.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            </div>
            <h3 className="duration-highlight">{durationLabel}</h3>
          </div>

          <div className="stat-box mini">
            <span className="box-label">PACKETS</span>
            <h1 className="box-value">
              {analysisData.total_packets.toLocaleString()}
            </h1>
          </div>
          <div className="stat-box mini">
            <span className="box-label">SIZE</span>
            <h1 className="box-value">
              {formatSize(analysisData.total_bytes)}
            </h1>
          </div>
          <div
            className={`stat-box mini ${threatsCount > 0 ? "danger-border" : ""}`}
          >
            <span className="box-label">THREATS</span>
            <h1
              className="box-value"
              style={{ color: threatsCount > 0 ? "#ff4d4d" : "#1BE7FF" }}
            >
              {threatsCount}
            </h1>
          </div>
        </div>
      </div>

      {/* التبويبات - معدلة لتكون Scrollable على الهاتف */}
      <Box className="tabs-navigation-wrapper">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth" // يجعل التبويبات تتوزع بالتساوي وتملأ العرض
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor:
                activeTab === "threats" && threatsExist ? "#ff4d4d" : "#1BE7FF",
            },
          }}
        >
          <Tab
            value="chart"
            icon={<SsidChartIcon />}
            iconPosition="top" // الأيقونة فوق النص لتوفير العرض
            label={<span className="tab-text">Flow</span>}
            sx={tabStyle}
          />

          <Tab
            value="stats"
            icon={<AssessmentIcon />}
            iconPosition="top"
            label={<span className="tab-text">Stats</span>}
            sx={tabStyle}
          />

          <Tab
            value="threats"
            icon={
              <GppBadIcon
                sx={{ color: threatsExist ? "#ff4d4d" : "inherit" }}
              />
            }
            iconPosition="top"
            label={<span className="tab-text">Threats ({threatsCount})</span>}
            sx={{ ...threatTabStyle }}
          />
        </Tabs>
      </Box>

      {/* منطقة العرض */}
      <div className="zshark-display-area">
        {activeTab === "chart" && (
          <div className="content-card chart-card">
            <h3 className="tab-inner-title">Packet Intensity Over Time</h3>
            <div className="chart-container">
              {/* تأكد من وجود كلاس بارتفاع محدد */}
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorPackets"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#1BE7FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1BE7FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#ffffff05"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="time"
                    stroke="#5a636e"
                    fontSize={10}
                    tickLine={false}
                    interval="preserveStartEnd" // لضمان عدم تداخل النصوص
                    minTickGap={30} // يمنع زحمة النصوص في المحور الأفقي
                  />
                  <YAxis
                    stroke="#5a636e"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0d1117",
                      border: "1px solid #1BE7FF33",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#1BE7FF" }}
                  />

                  <ReferenceLine
                    y={80} // القيمة التي يظهر عندها الخط (Threshold)
                    stroke="#ff4d4d" // لون أحمر للتحذير
                    strokeDasharray="5 5" // خط مقطع
                    strokeWidth={2}
                  >
                    <Label
                      value="THRESHOLD"
                      position="right"
                      fill="#ff4d4d"
                      fontSize={10}
                      fontWeight="bold"
                    />
                  </ReferenceLine>

                  <Brush
                    dataKey="time"
                    height={20}
                    stroke="#1BE7FF"
                    fill="#0d1117" // لون خلفية الشريط (نفس لون الكارت)
                    travellerWidth={10}
                    gap={5}
                    startIndex={0}
                    endIndex={chartData.length - 1}
                  />
                  <Area
                    type="monotone" // يجعل الخط انسيابياً
                    dataKey="packets"
                    stroke="#1BE7FF"
                    strokeWidth={3}
                    fill="url(#colorPackets)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="stats-grid-layout">
            <div className="content-card">
              <h3 className="tab-inner-title">Top Source IPs</h3>
              {analysisData.top_source_ips.slice(0, 5).map((ip, i) => (
                <div key={i} className="data-row-item">
                  <span className="ip-address">{ip.ip}</span>
                  <span className="data-count">{ip.packets}</span>
                </div>
              ))}
            </div>
            <div className="content-card">
              <h3 className="tab-inner-title">Top Ports</h3>
              {analysisData.top_dest_ports.slice(0, 5).map((port, i) => (
                <div key={i} className="data-row-item">
                  <span className="port-number">Port {port.port}</span>
                  <span className="data-count">{port.packets}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "threats" && (
          <div className="threats-vertical-container">
            {analysisData.detections.length > 0 ? (
              // التعديل هنا: ترتيب المصفوفة حسب الخطورة تنازلياً قبل العرض
              [...analysisData.detections]
                .sort((a, b) => b.severity - a.severity)
                .map((det, i) => {
                  const severityColor =
                    det.severity >= 0.8 ? "#ff4d4d" : "#ffa500";

                  return (
                    <div key={i} className="threat-enhanced-card">
                      <div
                        className="threat-side-indicator"
                        style={{ backgroundColor: severityColor }}
                      ></div>

                      <div className="threat-body">
                        <div className="threat-header-row">
                          <div className="threat-title-group">
                            <span
                              className="threat-badge"
                              style={{
                                color: severityColor,
                                borderColor: severityColor,
                              }}
                            >
                              {det.severity >= 0.8 ? "CRITICAL" : "WARNING"}
                            </span>
                            <h3 className="threat-label-text">{det.label}</h3>
                          </div>
                          <span className="threat-timestamp">
                            {new Date(det.timestamp).toLocaleTimeString()}
                          </span>
                        </div>

                        <div className="threat-engine-info">
                          Detected by:{" "}
                          <span className="engine-name">
                            {det.engine_name || det.model_name}
                          </span>
                        </div>

                        <p className="threat-justification-msg">
                          {det.justification}
                        </p>

                        {det.evidence && (
                          <div className="evidence-grid">
                            {Object.entries(det.evidence).map(
                              ([key, value]) => (
                                <div key={key} className="evidence-item">
                                  <span className="evidence-key">
                                    {key.replace(/_/g, " ")}
                                  </span>
                                  <span className="evidence-value">
                                    {typeof value === "number"
                                      ? value.toFixed(2)
                                      : value}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>

                      <div
                        className="threat-severity-glow-bar"
                        style={{
                          width: `${det.severity * 100}%`,
                          backgroundColor: severityColor,
                          boxShadow: `0 0 10px ${severityColor}88`,
                        }}
                      ></div>
                    </div>
                  );
                })
            ) : (
              <div className="no-threats-view">
                <h3>No Threats Detected</h3>
                <p>Your network traffic appears to be safe.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
