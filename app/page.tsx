'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  Eye,
  EyeOff,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-400 to-blue-600">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white">
          <img
              src="/logoo.png"
              alt="MEW Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <button className="text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-xl font-semibold text-center mb-6">
            تسجيل الدخول
          </h1>

          {/* Tabs */}
          <div className="flex mb-6 border rounded-md overflow-hidden">
            <button
              className={`flex-1 py-3 px-4 text-center ${
                activeTab === 'personal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              مستهلك
            </button>
            <button
              className={`flex-1 py-3 px-4 text-center ${
                activeTab === 'government'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('government')}
            >
              القطاع الحكومي والشركات
            </button>
          </div>

          {/* Login Form */}
          <div className="bg-white p-6 rounded-md shadow-sm mb-6">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="الرقم المدني"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 text-gray-700">اختر نوع كلمة المرور</div>
                <div className="relative">
                  <select className="w-full p-3 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>كلمة المرور</option>
                  </select>
                  <ChevronDown
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="كلمة المرور"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div>
                <Link
                  href="/forgot-password"
                  className="text-blue-600 text-sm hover:underline"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <div className="text-gray-600 mb-4">لا تملك حساب؟</div>
              <Link
                href="/register"
                className="block w-full py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                إنشاء حساب جديد
              </Link>
            </div>
          </div>

          {/* App Showcase */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <Image
                src="/app_image_AR.png"
                alt="Mobile App Showcase"
                width={350}
                height={350}
                className="mx-auto"
              />
            </div>
            <h2 className="text-lg font-semibold mb-4">
              تطبيق السداد الالكتروني لوزارة الكهرباء والماء
            </h2>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link href="#" className="block">
                <Image
                  src="/appst.svg"
                  alt="Download on App Store"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/Google-Play-Logo.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="#" className="hover:underline">
              تواصل معنا
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              الفواتير
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              المساعدة والدعم
            </Link>
          </div>

          <div className="text-center mb-6">
            <div className="mb-2">تحميل تطبيق السداد الالكتروني</div>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link href="#" className="block">
                <Image
                  src="/appst.svg"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/Google-Play-Logo.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto bg-white p-1 rounded"
                />
              </Link>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="mb-2">
              لا تنسى متابعتنا على حسابنا الرسمي على مواقع التواصل الاجتماعي
            </div>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link href="#" className="block p-2 hover:text-blue-200">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="block p-2 hover:text-blue-200">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="block p-2 hover:text-blue-200">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="block p-2 hover:text-blue-200">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div className="text-center text-sm">
            © 2019 MEW الكويت - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
}
