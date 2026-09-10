import React, { useState } from 'react';
import { 
  Wifi, Signal, Battery, ChevronLeft, ShieldCheck, MapPin, 
  CheckCircle, Search, Clock, Download, Share2, Bell, 
  LogOut, Check, Phone, Map, Globe, Moon, ChevronDown, Car,
  Minus, Plus, AlertTriangle, Zap
} from 'lucide-react';

// ==========================================
// SHARED COMPONENTS
// ==========================================

const MobileWrapper = ({ children, isDark = false }) => (
  <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans">
    <div className={`w-full max-w-[400px] h-[850px] ${isDark ? 'bg-brand-navy' : 'bg-brand-bg'} rounded-[40px] shadow-2xl relative overflow-hidden border-[8px] border-gray-900 flex flex-col transition-colors duration-300`}>
      <div className={`flex justify-between items-center px-6 pt-5 pb-2 bg-transparent absolute top-0 w-full z-50 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        <span className="text-[15px] font-bold tracking-tight">9:41</span>
        <div className="flex gap-1.5 items-center">
          <Signal size={16} strokeWidth={2.5} />
          <Wifi size={16} strokeWidth={2.5} />
          <Battery size={22} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-24 pt-12 relative no-scrollbar">
        {children}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-900 dark:bg-gray-400 rounded-full z-50"></div>
    </div>
  </div>
);

const TopHeader = ({ title, subtitle, showBack = true, onBack }) => (
  <div className="flex items-center px-6 py-4 bg-transparent mt-2">
    {showBack && (
      <button onClick={onBack} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center shadow-sm text-brand-navy backdrop-blur-md border border-gray-200 mr-4 transition-all">
        <ChevronLeft size={24} />
      </button>
    )}
    <div className="flex flex-col">
      <h1 className="text-xl font-bold text-brand-navy">{title}</h1>
      {subtitle && <span className="text-[11px] text-gray-500 mt-0.5">{subtitle}</span>}
    </div>
  </div>
);

const BottomNav = ({ activeTab, navigateTo }) => (
  <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-4 pb-8 flex justify-between items-center z-40">
    <NavItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} label="Home" isActive={activeTab === 'dashboard'} onClick={() => navigateTo('dashboard')} />
    <NavItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>} label="QR Pass" isActive={activeTab === 'qr_pass'} onClick={() => navigateTo('qr_pass')} />
    <NavItem icon={<MapPin size={24} />} label="Stations" isActive={activeTab === 'stations'} onClick={() => navigateTo('stations')} />
    <NavItem icon={<Clock size={24} />} label="History" isActive={activeTab === 'history'} onClick={() => navigateTo('history')} />
  </div>
);

const NavItem = ({ icon, label, isActive, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-brand-navy' : 'text-gray-400 hover:text-gray-600'}`}>
    {icon}
    <span className={`text-[10px] font-semibold ${isActive ? 'text-brand-navy' : 'text-gray-400'}`}>{label}</span>
  </button>
);

const InputGroup = ({ label, subtitle, children }) => (
  <div className="flex flex-col gap-1.5 mb-4 relative">
    <div className="flex justify-between items-baseline">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      {subtitle && <span className="text-[10px] text-gray-400">{subtitle}</span>}
    </div>
    {children}
  </div>
);

// ==========================================
// SCREENS
// ==========================================

const LandingPage = ({ navigateTo }) => (
  <div className="flex flex-col h-full px-6 pt-8 pb-10">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-xl font-bold text-white">National Fuel Pass</h1>
      <button onClick={() => navigateTo('operator_login')} className="px-3 py-1.5 rounded-lg border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
        Operator Sign In
      </button>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="w-[280px] h-[180px] bg-gradient-to-br from-brand-card to-gray-900 rounded-2xl shadow-[0_0_40px_rgba(5,150,105,0.2)] mb-8 border border-white/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="w-32 h-32 border-2 border-brand-green/30 rounded-lg flex flex-col items-center justify-center text-brand-green relative z-10">
          <svg className="w-16 h-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
          <span className="text-[10px] font-bold tracking-widest uppercase">Scan For Secure Fueling</span>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-white text-center leading-tight mb-4">Your Fuel.<br/>Your Quota.<br/>Your Pass.</h2>
      <p className="text-gray-400 text-center text-sm mb-8 px-4">Access your digital Fuel Pass and manage your fuel quota.</p>
      <div className="w-full flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-3 text-gray-300 text-sm">
          <ShieldCheck className="text-brand-amber" size={20} /> Secure & Transparent Allocation
        </div>
        <div className="flex items-center gap-3 text-gray-300 text-sm">
          <MapPin className="text-brand-amber" size={20} /> Real-Time Station Fuel Status
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-3 w-full">
      <button onClick={() => navigateTo('signin')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors">Sign In</button>
      <button onClick={() => navigateTo('register')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-transparent border-2 border-white/20 text-white hover:bg-white/10 transition-colors">Register Vehicle</button>
    </div>
  </div>
);

const SignInScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-white">
    <TopHeader title="Sign In" subtitle="உள்நுழைக" onBack={() => navigateTo('landing')} />
    <div className="px-6 mt-6 flex-1">
      <div className="mb-6">
        <h3 className="text-[15px] font-bold text-brand-navy mb-1">Step 1: Mobile Authentication</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Enter your registered mobile number to receive a one-time verification code.</p>
      </div>
      <InputGroup label="Mobile Number" subtitle="கைபேசி எண்">
        <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 ring-brand-navy/20 transition-all">
          <div className="bg-gray-50 px-4 py-3.5 border-r border-gray-200 text-brand-navy font-semibold">+94</div>
          <input type="tel" defaultValue="77 345 8921" className="flex-1 px-4 py-3.5 text-brand-navy font-semibold outline-none" />
          <div className="px-4 py-3.5 flex items-center justify-center text-brand-green"><CheckCircle size={20} /></div>
        </div>
      </InputGroup>
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 flex items-center gap-3 mb-8">
        <Bell size={18} className="text-brand-green flex-shrink-0" />
        <span className="text-sm font-semibold text-brand-green">OTP sent successfully to +94 77 *** 8921</span>
      </div>
      <div className="mb-4">
        <h3 className="text-[15px] font-bold text-brand-navy mb-1">Step 2: Enter Verification Code</h3>
        <p className="text-xs text-gray-500">6-Digit security key (OTP) verification.</p>
      </div>
      <div className="flex justify-between gap-2 mb-4">
        {[4, 2, 8, 9, '', ''].map((digit, i) => (
          <div key={i} className={`w-12 h-14 rounded-xl border flex items-center justify-center text-xl font-bold text-brand-navy shadow-sm ${digit !== '' ? 'border-gray-200 bg-white' : 'border-gray-300 bg-gray-50'}`}>
            {digit}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Didn't receive code?</span>
        <span className="font-bold text-brand-amber">Resend in 32s</span>
      </div>
    </div>
    <div className="p-6">
      <button onClick={() => navigateTo('dashboard')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-navy text-white hover:bg-slate-800 transition-colors">Verify & Proceed</button>
    </div>
  </div>
);

const RegistrationScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-white">
    <TopHeader title="Vehicle Registration" subtitle="வாகன பதிவு" onBack={() => navigateTo('landing')} />
    <div className="px-6 mt-4 flex-1 overflow-y-auto pb-4 no-scrollbar">
      <InputGroup label="Full Name" subtitle="முழு பெயர்">
        <input type="text" defaultValue="Nimal Surasena Perera" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy font-semibold outline-none focus:ring-2 ring-brand-navy/20" />
      </InputGroup>
      <InputGroup label="NIC Number" subtitle="தேசிய அடையாள அட்டை எண்">
        <input type="text" defaultValue="199204502840" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy font-semibold outline-none focus:ring-2 ring-brand-navy/20" />
      </InputGroup>
      <InputGroup label="Vehicle Registration Number" subtitle="வாகன பதிவு எண்">
        <div className="flex border border-brand-navy rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-100 px-4 py-3.5 border-r border-gray-200 text-brand-navy font-bold">WP</div>
          <input type="text" defaultValue="KA-5523" className="flex-1 px-4 py-3.5 text-brand-navy font-bold text-lg outline-none" />
        </div>
      </InputGroup>
      <InputGroup label="Vehicle Type" subtitle="வாகன வகை">
        <select className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy font-semibold outline-none appearance-none bg-white">
          <option>Car (கார்)</option>
        </select>
        <ChevronDown size={20} className="absolute right-4 top-9 text-gray-400 pointer-events-none" />
      </InputGroup>
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <label className="text-sm font-semibold text-gray-700">Fuel Type</label>
          <span className="text-[10px] text-gray-400">எரிபொருள் வகை</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="border-2 border-brand-green bg-emerald-50 rounded-xl px-4 py-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-brand-green border-2 border-white shadow-sm"></div>
            <span className="font-bold text-brand-green text-sm">Petrol 92</span>
          </div>
          <div className="border border-gray-200 bg-white rounded-xl px-4 py-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
            <span className="font-semibold text-gray-500 text-sm">Diesel</span>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 mt-4 mb-8">
        <div className="w-5 h-5 rounded border border-brand-green bg-brand-green flex items-center justify-center mt-0.5 flex-shrink-0">
          <Check size={14} className="text-white" strokeWidth={3} />
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          I declare that the vehicle details provided match the Department of Motor Traffic registry records.
        </p>
      </div>
    </div>
    <div className="px-6 pb-6 pt-2 bg-white">
      <button onClick={() => navigateTo('dashboard')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors">Complete Registration</button>
    </div>
  </div>
);

const DashboardScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <div className="flex justify-between items-center px-6 pt-4 mb-6">
      <div className="flex items-center gap-3">
        <div onClick={() => navigateTo('profile')} className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg shadow-md cursor-pointer hover:ring-2 ring-brand-green ring-offset-2 transition-all">NP</div>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-bold text-brand-navy leading-tight">Nimal Perera</h2>
          <span className="text-[12px] text-gray-500">NIC: 199204****</span>
        </div>
      </div>
      <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy shadow-sm relative">
        <Bell size={20} />
        <div className="absolute top-2 right-2.5 w-2 h-2 bg-brand-red rounded-full border border-white"></div>
      </button>
    </div>

    <div className="px-6 flex-1 overflow-y-auto no-scrollbar pb-24">
      <div className="bg-brand-navy rounded-[24px] p-5 relative overflow-hidden shadow-lg mb-4">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <span className="bg-brand-amber text-brand-navy text-[10px] font-bold px-2 py-0.5 rounded uppercase">WP | KA-5523</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-0.5">Toyota Yaris</h3>
            <span className="text-xs text-gray-300">Petrol 92 • Car</span>
          </div>
          
          {/* Custom SVG Donut Chart */}
          <div className="relative w-[72px] h-[72px]">
            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ffffff33" strokeWidth="4" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#059669" strokeWidth="4" strokeDasharray="37, 100" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-[16px] font-bold leading-none">7.5L</span>
              <span className="text-[8px] font-medium text-gray-300 mt-0.5 uppercase tracking-wider">Remaining</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-3 flex justify-between items-center">
          <span className="text-xs text-gray-300">Allocated: <span className="font-semibold text-white">20L</span> | Used: <span className="font-semibold text-white">12.5L</span></span>
          <span className="text-xs font-semibold text-brand-amber">● Resets Mon, 15 Sep</span>
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <button onClick={() => navigateTo('qr_pass')} className="flex-1 bg-brand-green hover:bg-emerald-700 transition-colors rounded-2xl p-4 flex items-center justify-center gap-3 shadow-md shadow-brand-green/20">
          <div className="bg-white/20 p-2 rounded-xl text-white"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></div>
          <div className="flex flex-col items-start">
            <span className="text-[15px] font-bold text-white leading-tight">Show Pass</span>
            <span className="text-[11px] text-emerald-100">QR</span>
          </div>
        </button>
        <button onClick={() => navigateTo('stations')} className="flex-1 bg-white hover:bg-gray-50 transition-colors border border-gray-200 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-sm">
          <div className="bg-gray-100 p-2 rounded-xl text-brand-navy"><MapPin size={24} /></div>
          <div className="flex flex-col items-start">
            <span className="text-[15px] font-bold text-brand-navy leading-tight">Find Stations</span>
          </div>
        </button>
      </div>

      <div className="flex justify-between items-baseline mb-4">
        <h3 className="text-[16px] font-bold text-brand-navy">Recent Transactions</h3>
        <span className="text-xs font-semibold text-gray-400 cursor-pointer">View All</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-navy"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-brand-navy">CEYPETCO Colombo 07</span>
              <span className="text-[11px] text-gray-500">10 Sep, 2024 • Petrol 92</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-brand-green">- 10.00 L</span>
            <span className="text-[11px] font-semibold text-gray-500">LKR 3,460.00</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-brand-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-brand-navy">LIOC Bambalapitiya</span>
              <span className="text-[11px] text-gray-500">03 Sep, 2024 • Petrol 92</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-brand-green">- 2.50 L</span>
            <span className="text-[11px] font-semibold text-gray-500">LKR 865.00</span>
          </div>
        </div>
      </div>
    </div>
    <BottomNav activeTab="dashboard" navigateTo={navigateTo} />
  </div>
);

const QRPassScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-brand-navy relative">
    <div className="px-6 pt-6 mb-8 flex justify-between items-center">
      <div className="flex items-center gap-2 bg-brand-card py-1.5 px-3 rounded-lg border border-white/10">
        <div className="w-6 h-6 rounded bg-brand-amber flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
        </div>
        <span className="text-[13px] font-semibold text-white">Digital Fuel Identity</span>
      </div>
      <span className="bg-brand-green text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Active</span>
    </div>

    <div className="flex-1 px-6 flex flex-col items-center">
      <div className="text-center mb-6">
        <span className="text-xs text-gray-400 mb-1 block">Registered Vehicle</span>
        <div className="bg-brand-amber text-brand-navy font-bold text-xl px-4 py-1 rounded-md inline-block mb-3 border-2 border-brand-amber shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          WP | KA-5523
        </div>
        <h2 className="text-lg font-bold text-white mb-0.5">Nimal Surasena Perera</h2>
        <span className="text-xs text-gray-400">Toyota Yaris • Car • Petrol 92</span>
      </div>

      <div className="w-full bg-white rounded-[32px] p-6 pb-8 shadow-2xl flex flex-col items-center relative">
        <div className="w-56 h-56 relative mb-6">
          <div className="absolute inset-0 border-[6px] border-brand-navy rounded-full"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center p-3">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=NFP-WP-KA-5523`} alt="QR Code" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-navy text-white p-1.5 rounded-full border-[3px] border-white">
            <ShieldCheck size={18} />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-navy text-white p-1.5 rounded-full border-[3px] border-white">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-brand-navy font-bold text-[18px]">SECURE FUEL PASS</h3>
          <span className="text-[9px] font-bold text-brand-navy/60 tracking-widest uppercase">Digital Identity</span>
        </div>

        <div className="w-full bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center justify-center gap-2 mb-6">
          <Moon size={16} className="text-brand-navy" />
          <span className="text-xs font-semibold text-brand-navy">Screen brightness auto-boosted for scanners</span>
        </div>

        <div className="w-full flex justify-between items-end border-t border-gray-100 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 mb-0.5">Remaining Quota</span>
            <span className="text-lg font-bold text-brand-green leading-none">7.5 Litres</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-500 mb-0.5">Validity</span>
            <span className="text-sm font-bold text-brand-navy leading-none">Until 15 Sep 2024</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <button onClick={() => navigateTo('dashboard')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-white text-brand-navy hover:bg-gray-100 transition-colors shadow-lg">Close Pass</button>
    </div>
  </div>
);

const FindStationsScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <TopHeader title="Find Fuel Stations" subtitle="எரிபொருள் நிலையங்கள்" showBack={false} />
    
    <div className="px-6 mt-4">
      <div className="relative mb-4">
        <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
        <input type="text" placeholder="Search Colombo area, stations..." className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm font-semibold text-brand-navy outline-none focus:ring-2 ring-brand-navy/20 shadow-sm" />
      </div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        <button className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-full whitespace-nowrap shadow-sm">Petrol 92</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-full whitespace-nowrap shadow-sm">Open Now</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-full whitespace-nowrap shadow-sm">Within 5km</button>
      </div>
    </div>

    <div className="px-6 flex flex-col items-center justify-center my-4 relative">
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 z-10 bg-[#F8FAFC] px-2">Colombo, Sri Lanka</span>
      <div className="w-full h-[180px] bg-white border border-gray-200 rounded-[20px] shadow-sm relative overflow-hidden flex items-center justify-center">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1A365D_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 400 200"><path d="M50 150 L100 100 L200 120 L300 80 L350 140" stroke="#1A365D" strokeWidth="4" fill="none"/><path d="M0 50 L100 80 L150 40 L250 90 L400 50" stroke="#1A365D" strokeWidth="2" fill="none"/></svg>
        
        {/* Map Pins built with safe HTML/CSS */}
        <div className="absolute top-[40%] left-[35%] flex flex-col items-center">
           <div className="bg-brand-green text-white p-1.5 rounded-full shadow-lg relative z-10 w-8 h-8 flex items-center justify-center border-2 border-white">
             <MapPin size={16} />
           </div>
           {/* Custom triangle pointer */}
           <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-brand-green -mt-1 relative z-0"></div>
           <div className="mt-1 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm text-[8px] font-bold text-brand-navy whitespace-nowrap">CEYPETCO</div>
        </div>

        <div className="absolute top-[30%] right-[30%] flex flex-col items-center">
           <div className="bg-brand-amber text-white p-1.5 rounded-full shadow-lg relative z-10 w-8 h-8 flex items-center justify-center border-2 border-white">
             <MapPin size={16} />
           </div>
           <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-brand-amber -mt-1 relative z-0"></div>
           <div className="mt-1 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm text-[8px] font-bold text-brand-navy whitespace-nowrap">LIOC</div>
        </div>
      </div>
    </div>

    <div className="px-6 flex-1 overflow-y-auto no-scrollbar pb-24">
      <h3 className="text-[15px] font-bold text-brand-navy mb-3">Nearby Fuel Availability</h3>
      
      <div className="flex flex-col gap-3">
        <div onClick={() => navigateTo('station_status')} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-all relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green"></div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-brand-green mt-0.5"><MapPin size={20} /></div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-brand-navy">CEYPETCO Colombo 07</span>
                <span className="text-[11px] text-gray-500 mt-0.5">0.8 km • Horton Place</span>
              </div>
            </div>
            <span className="bg-emerald-50 text-brand-green border border-emerald-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Available</span>
          </div>
          <div className="pl-13 flex justify-between items-center ml-13">
             <span className="text-xs text-gray-400">Est. Wait Time: <span className="font-semibold">~15 mins</span></span>
             <span className="text-xs text-gray-500">Queue: 12 vehicles</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm relative overflow-hidden opacity-80">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-amber"></div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-brand-amber mt-0.5"><MapPin size={20} /></div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-brand-navy">LIOC Bambalapitiya</span>
                <span className="text-[11px] text-gray-500 mt-0.5">2.4 km • Galle Road</span>
              </div>
            </div>
            <span className="bg-amber-50 text-brand-amber border border-amber-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Limited</span>
          </div>
          <div className="pl-13 flex justify-between items-center ml-13">
             <span className="text-xs text-gray-400">Est. Wait Time: <span className="font-semibold text-gray-600">~45 mins</span></span>
             <span className="text-xs text-gray-500">Queue: 35 vehicles</span>
          </div>
        </div>
      </div>
    </div>
    
    <BottomNav activeTab="stations" navigateTo={navigateTo} />
  </div>
);

const StationStatusScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <TopHeader title="Station Status" subtitle="நிலைய விவரம்" onBack={() => navigateTo('stations')} />
    
    <div className="px-6 mt-4 flex-1 overflow-y-auto no-scrollbar pb-24">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-brand-navy leading-tight">CEYPETCO Colombo 07</h2>
          <span className="text-[12px] text-gray-500 mt-1 pr-4">Horton Place, Ward Place Junc, Colombo</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
          <MapPin size={24} />
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-brand-navy text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-sm">
          <Map size={18} /> Navigate
        </button>
        <button className="flex-1 bg-white border border-gray-200 text-brand-navy py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
          <Phone size={18} /> Call Station
        </button>
      </div>

      <h3 className="text-[16px] font-bold text-brand-navy mb-4">Real-Time Fuel Availability</h3>
      
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-3 bg-gray-50 py-3 px-4 border-b border-gray-100">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider col-span-1">Fuel Type</span>
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider col-span-1 text-center">Status</span>
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider col-span-1 text-right">Last Stock Update</span>
        </div>
        
        <div className="grid grid-cols-3 py-4 px-4 border-b border-gray-100 items-center">
          <span className="text-[14px] font-bold text-brand-navy col-span-1">Petrol 92</span>
          <div className="col-span-1 flex justify-center">
            <span className="bg-emerald-50 text-brand-green text-[10px] font-bold px-2 py-1 rounded">Available</span>
          </div>
          <span className="text-[11px] text-gray-400 font-medium text-right col-span-1">10 mins ago</span>
        </div>
        
        <div className="grid grid-cols-3 py-4 px-4 border-b border-gray-100 items-center">
          <span className="text-[14px] font-bold text-brand-navy col-span-1">Petrol 95</span>
          <div className="col-span-1 flex justify-center">
            <span className="bg-amber-50 text-brand-amber text-[10px] font-bold px-2 py-1 rounded">Limited Stock</span>
          </div>
          <span className="text-[11px] text-gray-400 font-medium text-right col-span-1">10 mins ago</span>
        </div>
        
        <div className="grid grid-cols-3 py-4 px-4 items-center">
          <span className="text-[14px] font-bold text-brand-navy col-span-1">Diesel Auto</span>
          <div className="col-span-1 flex justify-center">
            <span className="bg-red-50 text-brand-red text-[10px] font-bold px-2 py-1 rounded">Out of Stock</span>
          </div>
          <span className="text-[11px] text-gray-400 font-medium text-right col-span-1">10 mins ago</span>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col">
          <span className="text-[11px] text-gray-500 mb-1">Avg. Dispense Time</span>
          <span className="text-lg font-bold text-brand-navy">4 Mins / Car</span>
        </div>
        <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col">
          <span className="text-[11px] text-gray-500 mb-1">Operating Hours</span>
          <span className="text-lg font-bold text-brand-green">24 Hours</span>
        </div>
      </div>
    </div>
    
    <BottomNav activeTab="stations" navigateTo={navigateTo} />
  </div>
);

const HistoryScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <TopHeader title="My Fuel History" subtitle="பரிவர்த்தனை வரலாறு" showBack={false} />
    
    <div className="px-6 mt-4 flex-1 overflow-y-auto no-scrollbar pb-24">
      <div className="flex gap-3 mb-6">
        <div className="flex-1 bg-brand-navy rounded-2xl p-4 shadow-md text-white">
          <span className="text-[11px] text-gray-300 block mb-1">September Fuel Spend</span>
          <span className="text-xl font-bold text-brand-amber block mb-1">LKR 12,840.00</span>
          <span className="text-[10px] text-gray-400">Total: 35.00 Litres</span>
        </div>
        <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col justify-center">
          <span className="text-[11px] text-gray-500 block mb-1">Quotas Completed</span>
          <span className="text-xl font-bold text-brand-navy block mb-1">4 Fill-ups</span>
          <span className="text-[10px] font-semibold text-brand-green">100% Valid QR Scans</span>
        </div>
      </div>

      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">September 2024</h3>
        <span className="text-xs font-bold text-brand-navy flex items-center gap-1 cursor-pointer"><Download size={14} /> Export PDF</span>
      </div>

      <div className="flex flex-col gap-3">
        <div onClick={() => navigateTo('receipt')} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
           <div className="flex justify-between items-start mb-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center mt-1">
                <Check size={16} className="text-brand-navy" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-brand-navy leading-tight mb-1">CEYPETCO Colombo 07</span>
                <span className="text-[11px] text-gray-500">10 Sep • 14:32</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[14px] font-bold text-brand-navy">10.00L</span>
              <span className="text-[12px] font-bold text-brand-green mt-0.5">LKR 3,460.00</span>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
             <span className="text-[10px] text-gray-400 uppercase tracking-wider">ID: TXN-984029148</span>
             <span className="text-[10px] font-semibold text-gray-500">Verified Govt Receipt</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
           <div className="flex justify-between items-start mb-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center mt-1">
                <Check size={16} className="text-brand-navy" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-brand-navy leading-tight mb-1">LIOC Bambalapitiya</span>
                <span className="text-[11px] text-gray-500">03 Sep • 09:12</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[14px] font-bold text-brand-navy">2.50L</span>
              <span className="text-[12px] font-bold text-brand-green mt-0.5">LKR 865.00</span>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
             <span className="text-[10px] text-gray-400 uppercase tracking-wider">ID: TXN-982103498</span>
             <span className="text-[10px] font-semibold text-gray-500">Verified Govt Receipt</span>
          </div>
        </div>
      </div>
    </div>
    
    <BottomNav activeTab="history" navigateTo={navigateTo} />
  </div>
);

const ReceiptScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-brand-navy">
    <TopHeader title="Fueling Receipt" subtitle="ரசீது" onBack={() => navigateTo('history')} />
    
    <div className="px-6 mt-4 flex-1 flex flex-col overflow-y-auto no-scrollbar">
      <div className="bg-white rounded-3xl p-6 shadow-2xl relative mb-8">
        
        <div className="absolute -left-3 top-1/2 w-6 h-6 bg-brand-navy rounded-full"></div>
        <div className="absolute -right-3 top-1/2 w-6 h-6 bg-brand-navy rounded-full"></div>
        <div className="absolute left-6 right-6 top-1/2 border-t-[2px] border-dashed border-gray-200"></div>

        <div className="text-center pb-6">
          <h2 className="text-[16px] font-bold text-brand-navy mb-1">CEYPETCO COLOMBO 07</h2>
          <span className="text-[11px] text-gray-500 block">Maitland Crescent, Colombo 00700</span>
          <span className="text-[11px] text-gray-500 block mt-1">10 Sep 2025 • 02:45 PM</span>
        </div>

        <div className="text-center pt-8 pb-6">
          <span className="text-[11px] font-bold text-brand-amber uppercase tracking-widest block mb-2">Litres Dispensed</span>
          <h1 className="text-5xl font-extrabold text-brand-navy leading-none mb-3">8.50 L</h1>
          <span className="inline-block bg-brand-navy text-white text-[10px] font-bold px-3 py-1 rounded-full">Petrol 92</span>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Vehicle Number</span>
            <span className="text-sm font-bold text-brand-navy">WP-KA-5523</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Unit Price</span>
            <span className="text-sm font-semibold text-brand-navy">LKR 366.00 / L</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-xs text-gray-500">Total Amount</span>
            <span className="text-[15px] font-bold text-brand-green">LKR 3,111.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Payment Method</span>
            <span className="text-sm font-semibold text-brand-navy">Mobile Wallet (Pay)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Attendant ID</span>
            <span className="text-sm font-semibold text-brand-navy">EMP-302 (K. Perera)</span>
          </div>
        </div>

        <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-3">
          <CheckCircle size={20} className="text-brand-green" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide">Verified Govt Allocation</span>
            <span className="text-[9px] text-gray-500 uppercase">ID: NFP-2025-0847291</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <button className="flex-1 bg-transparent border-2 border-white/20 text-white py-4 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <Share2 size={18} /> Share
        </button>
        <button className="flex-1 bg-transparent border-2 border-white/20 text-white py-4 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <Download size={18} /> Download
        </button>
      </div>
      
      <button onClick={() => navigateTo('dashboard')} className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-[16px] hover:bg-emerald-700 transition-colors shadow-lg">
        Back to Dashboard
      </button>
    </div>
  </div>
);

const ProfileScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <div className="flex items-center justify-between px-6 py-4 mt-2">
      <div className="flex items-center gap-4">
        <button onClick={() => navigateTo('dashboard')} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-navy border border-gray-200 hover:bg-gray-50 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-brand-navy">Profile & Help</h1>
      </div>
      <div className="flex items-center gap-2">
         <div className="w-6 h-6 bg-brand-amber rounded flex items-center justify-center">
           <svg className="w-4 h-4 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
         </div>
      </div>
    </div>
    
    <div className="px-6 flex-1 overflow-y-auto no-scrollbar pb-10">
      <div className="flex items-center gap-4 mb-8 mt-2">
        <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-2xl shadow-md">KP</div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-brand-navy leading-tight">Kamal Surasena Perera</h2>
          <span className="text-xs text-gray-500 mt-0.5">NIC: 198504102914 • +94 77 123 4567</span>
        </div>
      </div>

      <div className="bg-brand-navy rounded-[20px] p-5 mb-8 shadow-md relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <span className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Registered Vehicle</span>
          <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-1 rounded-md">Verified</span>
        </div>
        <div className="flex justify-between items-end relative z-10">
          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold text-white mb-0.5">Toyota Yaris (2018)</h3>
            <span className="text-xs text-gray-300">Car • Petrol 92 • WP-KA-5523</span>
          </div>
          <Car size={32} strokeWidth={1.5} className="text-brand-amber" />
        </div>
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 pl-1">Settings</h3>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm mb-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-brand-navy" />
            <span className="text-sm font-bold text-brand-navy">Preferred Language</span>
          </div>
          <span className="text-sm font-bold text-brand-amber">English (UK)</span>
        </div>
        <div className="bg-gray-100 p-1 rounded-xl flex">
          <button className="flex-1 py-1.5 bg-brand-navy text-white text-xs font-bold rounded-lg shadow-sm">English</button>
          <button className="flex-1 py-1.5 text-gray-500 text-xs font-semibold hover:text-brand-navy transition-colors">සිංහල</button>
          <button className="flex-1 py-1.5 text-gray-500 text-xs font-semibold hover:text-brand-navy transition-colors">தமிழ்</button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm mb-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Moon size={20} className="text-brand-navy" />
          <span className="text-sm font-bold text-brand-navy">Dark Mode</span>
        </div>
        <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-not-allowed">
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
        </div>
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 pl-1">Help & Support</h3>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-8 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-brand-navy">How is my quota calculated?</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
          <p className="text-xs text-gray-500 leading-relaxed pr-4">
            Weekly quotas are assigned by the government based on vehicle type and class registration data from the Department of Motor Traffic (DMT).
          </p>
        </div>
        <div className="p-4 flex justify-between items-center">
          <span className="text-sm font-bold text-brand-navy">Contact Government Hotline</span>
          <span className="text-sm font-bold text-brand-amber">1919</span>
        </div>
      </div>

      <button onClick={() => navigateTo('landing')} className="w-full py-4 rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-red-50 transition-colors">
        <LogOut size={18} /> Sign Out <span className="text-[12px] ml-1 opacity-80">வெளியேறு</span>
      </button>
    </div>
  </div>
);


const OperatorLoginScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-brand-navy">
    <div className="px-6 mt-6 flex-1 overflow-y-auto no-scrollbar pb-10">
      <div className="flex items-center gap-3 mb-8 mt-2">
        <div className="w-10 h-10 bg-brand-amber rounded flex items-center justify-center">
          <ShieldCheck size={24} className="text-brand-navy" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-xs font-bold uppercase tracking-wider">Government of Sri Lanka</span>
          <span className="text-gray-400 text-[10px]">Ministry of Power & Energy</span>
        </div>
      </div>
      
      <span className="bg-brand-amber text-brand-navy text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">Station Staff Access</span>
      <h1 className="text-3xl font-bold text-white mb-1">Operator Sign In</h1>
      <span className="text-gray-400 text-xs mb-8 block">/ ஆப்பரேட்டர் உள்நுழைவு</span>

      <div className="flex flex-col gap-1.5 mb-5 relative">
        <label className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Station Code /</label>
        <div className="flex border border-brand-amber rounded-xl overflow-hidden bg-brand-card shadow-sm">
          <input type="text" defaultValue="CP-COL-07" className="flex-1 px-4 py-3.5 text-white bg-transparent font-bold outline-none" />
          <div className="px-4 py-3.5 flex items-center justify-center text-brand-green text-xs font-bold">CEYPETCO OK</div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-5 relative">
        <label className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Operator Staff ID</label>
        <input type="text" defaultValue="EMP-302" className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white bg-brand-card font-semibold outline-none focus:ring-2 ring-brand-amber/50" />
      </div>

      <div className="flex flex-col gap-1.5 mb-6 relative">
        <label className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">Secret PIN (4-Digit)</label>
        <input type="password" defaultValue="1234" className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white bg-brand-card font-bold tracking-[0.5em] text-xl outline-none focus:ring-2 ring-brand-amber/50" />
      </div>

      <div className="bg-brand-card border border-white/5 rounded-xl p-4 flex items-center gap-3">
        <span className="bg-white text-brand-navy text-[10px] font-bold px-2 py-1 rounded uppercase shadow-sm">CEYPETCO</span>
        <span className="text-xs text-gray-300">Colombo 07 Maitland Crescent station selected.</span>
      </div>
    </div>
    
    <div className="p-6 pt-2 pb-8">
      <button onClick={() => navigateTo('operator_scan')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-brand-green/20">Authenticate Operator</button>
    </div>
  </div>
);

const OperatorScanScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-brand-navy relative">
    <div className="px-6 pt-10 mb-6 flex justify-between items-center bg-brand-card py-4 border-b border-white/5 shadow-md">
      <div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-full bg-brand-amber flex items-center justify-center text-brand-navy font-bold shadow-sm">OP</div>
         <div className="flex flex-col">
           <span className="text-sm font-bold text-white">Colombo 07 Maitland</span>
           <span className="text-[10px] text-gray-400">Operator: EMP-302 (K. Perera)</span>
         </div>
      </div>
      <span className="bg-white text-brand-navy text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">CEYPETCO</span>
    </div>

    <div className="flex-1 px-6 flex flex-col items-center justify-center -mt-6">
      <h2 className="text-xl font-bold text-white mb-1">Scan Customer Fuel Pass</h2>
      <div className="flex justify-between w-full max-w-[280px] mb-8">
        <span className="text-xs text-gray-400">QR</span>
        <span className="text-xs text-gray-400">/ QR குறியீட்டை ஸ்கேன் செய்க</span>
      </div>

      <div 
        onClick={() => navigateTo('operator_verify')}
        className="w-[280px] h-[280px] bg-gradient-to-br from-brand-card to-[#07101C] rounded-3xl mb-8 relative flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer hover:ring-2 ring-brand-green/30 transition-all group"
      >
         <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-brand-amber rounded-tl-sm"></div>
         <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-brand-amber rounded-tr-sm"></div>
         <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-brand-amber rounded-bl-sm"></div>
         <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-brand-amber rounded-br-sm"></div>
         
         <div className="flex flex-col items-center z-10 transition-transform group-active:scale-95">
           <span className="text-[10px] font-bold text-white mb-2 uppercase tracking-widest">National Fuel Pass</span>
           <div className="w-32 h-32 bg-white rounded-lg p-2 shadow-xl mb-3 relative overflow-hidden">
             <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MOCK_SCAN" alt="Scanner" className="w-full h-full opacity-80" />
           </div>
           <span className="text-xs font-bold text-white bg-brand-navy/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">FUEL-LK-123-ABC-789 <CheckCircle size={12} className="inline text-brand-green ml-1"/></span>
         </div>
         
         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-red shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse z-20"></div>
      </div>

      <button className="bg-white/10 hover:bg-white/20 text-white rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2 backdrop-blur-md transition-colors shadow-sm">
        <Zap size={16} className="text-brand-amber" /> Enable Flashlight
      </button>
    </div>
    
    <div className="p-6 pb-8">
      <button className="w-full py-4 rounded-xl font-semibold text-[15px] bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors">Enter Registration Plate Manually</button>
    </div>
  </div>
);

const OperatorVerifyScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <TopHeader title="Verify Customer" subtitle="/ சரிபார்த்தல்" onBack={() => navigateTo('operator_scan')} />
    
    <div className="px-6 flex-1 overflow-y-auto no-scrollbar pb-24 mt-4">
      
      <div className="bg-emerald-50 border border-brand-green/30 rounded-xl p-4 flex gap-3 mb-6 shadow-sm relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green"></div>
        <div className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
          <Check size={14} strokeWidth={3} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-brand-green uppercase tracking-wide">Fuel Pass Verified /</span>
          <span className="text-[11px] font-medium text-emerald-700 mt-0.5">This vehicle is cleared for immediate fueling.</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6 relative">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Vehicle & Owner</span>
        <div className="flex justify-between items-start mb-1">
          <h2 className="text-2xl font-black text-brand-navy tracking-tight">WP-KA-5523</h2>
          <span className="bg-amber-50 text-brand-amber border border-amber-100 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Petrol 92</span>
        </div>
        <span className="text-sm font-bold text-brand-navy block mb-1">Toyota Yaris • Car</span>
        <span className="text-xs text-gray-500">Owner: Kamal Surasena Perera</span>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6 relative">
         <div className="flex justify-between items-end mb-5">
           <div className="flex flex-col">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Quota Allocation</span>
             <span className="text-3xl font-black text-brand-green leading-none tracking-tight">7.50 Litres</span>
             <span className="text-[9px] text-gray-500 font-bold uppercase mt-1.5 tracking-wider">Remaining for current week</span>
           </div>
           <div className="flex flex-col items-end text-right">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Weekly Cap: 20.00 L</span>
             <span className="text-lg font-bold text-brand-navy leading-none">12.50 L</span>
             <span className="text-[9px] text-gray-500 font-bold uppercase mt-1.5 tracking-wider">Used so far</span>
           </div>
         </div>
         
         <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden relative mb-2 shadow-inner">
           <div className="absolute top-0 left-0 h-full bg-brand-green rounded-full w-[37.5%]"></div>
         </div>
         <span className="text-[10px] text-gray-400 font-medium block">Resets next Monday, 15 Sep 2025</span>
      </div>
    </div>
    
    <div className="p-6 bg-[#F8FAFC] flex flex-col gap-3 pb-8 z-10">
      <button onClick={() => navigateTo('operator_fuel_entry')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-brand-green/20">Proceed to Fuel Entry</button>
      <button onClick={() => navigateTo('operator_scan')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-transparent border-2 border-brand-red text-brand-red hover:bg-red-50 transition-colors">Reject License</button>
    </div>
  </div>
);

const OperatorFuelEntryScreen = ({ navigateTo }) => {
  const [litres, setLitres] = useState(7.50);
  const rate = 366.00; // Base rate for Petrol 92
  
  const updateLitres = (val) => {
    if(val >= 0 && val <= 7.50) setLitres(val);
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <TopHeader title="Fuel Entry" subtitle="/ எரிபொருள் அளவு" onBack={() => navigateTo('operator_verify')} />
      
      <div className="px-6 flex-1 flex flex-col mt-4">
        <div className="bg-brand-navy rounded-[20px] p-4 flex justify-between items-center shadow-lg mb-6 border border-brand-navy">
          <div className="flex flex-col">
            <span className="text-white font-bold text-[15px] mb-0.5">WP-KA-5523</span>
            <span className="text-gray-400 text-[11px]">Toyota Yaris • Petrol 92</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-brand-amber font-bold text-[15px] mb-0.5">7.50 L Max</span>
            <span className="text-gray-400 text-[10px] uppercase tracking-wider">Remaining Quota</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm mb-6 flex flex-col items-center">
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Enter Litres Dispensed</span>
           
           <div className="flex items-center justify-between w-full mb-6 relative">
             <button onClick={() => updateLitres(litres - 0.5)} className="w-14 h-14 rounded-full bg-[#F1F5F9] flex items-center justify-center text-brand-navy hover:bg-gray-200 transition-colors active:scale-95 z-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
               <Minus size={24} strokeWidth={2.5} />
             </button>
             
             <div className="text-center w-full absolute inset-0 flex flex-col items-center justify-center">
               <span className="text-[64px] font-black text-brand-navy tracking-tighter leading-none h-[64px] flex items-center">{litres.toFixed(2)}</span>
             </div>
             
             <button onClick={() => updateLitres(litres + 0.5)} className="w-14 h-14 rounded-full bg-[#F1F5F9] flex items-center justify-center text-brand-navy hover:bg-gray-200 transition-colors active:scale-95 z-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
               <Plus size={24} strokeWidth={2.5} />
             </button>
           </div>
           
           <span className="text-[18px] font-bold text-brand-green mt-2">LKR {(litres * rate).toLocaleString('en-US', {minimumFractionDigits: 2})} Total</span>
        </div>

        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Presets</span>
        <div className="flex gap-2">
          <button onClick={() => updateLitres(2.0)} className="flex-1 py-3.5 bg-white border border-gray-200 rounded-xl text-brand-navy font-bold text-[14px] hover:border-brand-navy transition-colors shadow-sm">2.00 L</button>
          <button onClick={() => updateLitres(5.0)} className="flex-1 py-3.5 bg-white border border-gray-200 rounded-xl text-brand-navy font-bold text-[14px] hover:border-brand-navy transition-colors shadow-sm">5.00 L</button>
          <button onClick={() => updateLitres(7.5)} className="flex-[1.4] py-3.5 bg-amber-50 border border-brand-amber/50 text-brand-amber font-bold text-[13px] hover:bg-amber-100 transition-colors shadow-sm">FULL QUOTA (7.5L)</button>
        </div>
      </div>

      <div className="p-6 bg-[#F8FAFC] pb-8">
        <button onClick={() => navigateTo('operator_confirm')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-brand-green/20">Confirm Amount</button>
      </div>
    </div>
  );
};

const OperatorConfirmScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-[#F8FAFC]">
    <TopHeader title="Confirm Dispatch" subtitle="/ உறுதிப்படுத்தல்" onBack={() => navigateTo('operator_fuel_entry')} />
    
    <div className="px-6 flex-1 flex flex-col mt-4 overflow-y-auto no-scrollbar">
      
      <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm mb-6 flex flex-col items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Dispensing Amount</span>
        <h1 className="text-6xl font-black text-brand-navy tracking-tighter mb-2">7.50 L</h1>
        <span className="text-[18px] font-bold text-brand-green mb-8">LKR 2,745.00</span>
        
        <div className="w-full border-t border-dashed border-gray-200 pt-5 flex flex-col gap-3.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-medium">Vehicle Plate</span>
            <span className="text-[13px] font-bold text-brand-navy">WP-KA-5523</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-medium">Fuel Type</span>
            <span className="text-[13px] font-bold text-brand-navy">Petrol 92</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-medium">Station</span>
            <span className="text-[13px] font-bold text-brand-navy">CEYPETCO Colombo 07</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-medium">Attendant ID</span>
            <span className="text-[13px] font-bold text-brand-navy">EMP-302 (K. Perera)</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-brand-amber/40 rounded-xl p-4 flex items-start gap-3 shadow-sm mb-4">
         <AlertTriangle size={20} className="text-brand-amber flex-shrink-0 mt-0.5" />
         <div className="flex flex-col">
           <span className="text-xs font-bold text-brand-navy uppercase tracking-wide">Quota Dispatch is Irreversible</span>
           <span className="text-[11px] text-gray-600 mt-1 leading-relaxed">Once submitted, 7.5L will be permanently deducted from this customer's weekly quota.</span>
         </div>
      </div>
    </div>

    <div className="p-6 flex flex-col gap-3 pb-8 bg-[#F8FAFC]">
      <button onClick={() => navigateTo('operator_success')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-brand-green/20">Approve & Dispatch</button>
      <button onClick={() => navigateTo('operator_fuel_entry')} className="w-full py-4 rounded-xl font-bold text-[15px] bg-transparent border-2 border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors">Cancel Transaction</button>
    </div>
  </div>
);

const OperatorSuccessScreen = ({ navigateTo }) => (
  <div className="flex flex-col h-full bg-brand-navy relative">
    <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-10">
      
      <div className="w-24 h-24 rounded-full bg-[#185341] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(5,150,105,0.4)] relative">
        <div className="absolute inset-0 rounded-full border-4 border-[#A7F3D0] opacity-50 scale-110"></div>
        <div className="w-16 h-16 rounded-full bg-[#A7F3D0] flex items-center justify-center relative z-10">
          <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center">
            <Check strokeWidth={4} size={28} className="text-white" />
          </div>
        </div>
      </div>
      
      <h1 className="text-[22px] font-bold text-white mb-1">Transaction Approved</h1>
      <span className="text-xs text-gray-400 block mb-10">/ பரிவர்த்தனை முடிந்தது</span>

      <div className="w-full bg-brand-card rounded-2xl p-6 shadow-2xl border border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
          <span className="text-brand-amber text-[10px] font-bold uppercase tracking-widest">Dispatch Receipt</span>
          <span className="text-[10px] text-gray-400 font-medium">ID: TXN-382901</span>
        </div>
        
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Dispensable Volume</span>
            <span className="text-[13px] font-bold text-white">7.50 L</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Total LKR Charge</span>
            <span className="text-[13px] font-bold text-white">LKR 2,745.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Remaining Quota</span>
            <span className="text-[13px] font-bold text-brand-green">0.00 L (Spent)</span>
          </div>
        </div>
      </div>
      
    </div>
    
    <div className="p-6 flex flex-col gap-3 pb-8">
      <button className="w-full py-4 rounded-xl font-bold text-[15px] bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors">Print Thermal Receipt</button>
      <button onClick={() => navigateTo('operator_scan')} className="w-full py-4 rounded-xl font-bold text-[16px] bg-brand-green text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-brand-green/20">Scan Next Customer</button>
    </div>
  </div>
);

// ==========================================
// MAIN APP ROUTER
// ==========================================

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing': return <LandingPage navigateTo={setCurrentScreen} />;
      case 'signin': return <SignInScreen navigateTo={setCurrentScreen} />;
      case 'register': return <RegistrationScreen navigateTo={setCurrentScreen} />;
      case 'dashboard': return <DashboardScreen navigateTo={setCurrentScreen} />;
      case 'qr_pass': return <QRPassScreen navigateTo={setCurrentScreen} />;
      case 'stations': return <FindStationsScreen navigateTo={setCurrentScreen} />;
      case 'station_status': return <StationStatusScreen navigateTo={setCurrentScreen} />;
      case 'history': return <HistoryScreen navigateTo={setCurrentScreen} />;
      case 'receipt': return <ReceiptScreen navigateTo={setCurrentScreen} />;
      case 'profile': return <ProfileScreen navigateTo={setCurrentScreen} />;
      case 'operator_login': return <OperatorLoginScreen navigateTo={setCurrentScreen} />;
      case 'operator_scan': return <OperatorScanScreen navigateTo={setCurrentScreen} />;
      case 'operator_verify': return <OperatorVerifyScreen navigateTo={setCurrentScreen} />;
      case 'operator_fuel_entry': return <OperatorFuelEntryScreen navigateTo={setCurrentScreen} />;
      case 'operator_confirm': return <OperatorConfirmScreen navigateTo={setCurrentScreen} />;
      case 'operator_success': return <OperatorSuccessScreen navigateTo={setCurrentScreen} />;
      default: return <LandingPage navigateTo={setCurrentScreen} />;
    }
  };

  return (
    <MobileWrapper isDark={
      currentScreen === 'landing' || 
      currentScreen === 'qr_pass' || 
      currentScreen === 'receipt' || 
      currentScreen === 'operator_login' || 
      currentScreen === 'operator_scan' || 
      currentScreen === 'operator_success'
    }>
      {renderScreen()}
    </MobileWrapper>
  );
}